import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/rootReducer'
import AuthService, { AuthCredentialsDto, UserDto } from './AuthService'
import handleThunk, {
  SliceErrorBase,
  SliceLoadingBase,
} from '@velialiev/redux-toolkit-handle-thunk'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const initialState: State = {
  token: '',
  loading: {},
  error: {},
}

type State = {
  token: string
  user?: UserDto
  loading: SliceLoading
  error: SliceError
}

const getSliceState = (state: RootState) => state.auth

export const authSelectors = {
  getToken: (state: RootState) => getSliceState(state).token,
  getUser: (state: RootState) => getSliceState(state).user,
  getLoading: (state: RootState) => getSliceState(state).loading,
  getError: (state: RootState) => getSliceState(state).error,
}

const thunks = {
  login: createAsyncThunk(
    'auth/login',
    (authCredentialsDto: AuthCredentialsDto) => {
      return AuthService.login(authCredentialsDto)
    },
  ),
}

export const { login } = thunks

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    deauthorize: (state) => {
      state.token = ''
      state.user = undefined
    },
  },
  extraReducers: (builder) => {
    handleThunk(builder, login, (state, { user, token }) => {
      state.token = token
      state.user = user
    })
  },
})

type ThunkNamesUnion = keyof typeof thunks
type SliceLoading = SliceLoadingBase<ThunkNamesUnion>
type SliceError = SliceErrorBase<ThunkNamesUnion>

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user'],
}

export const { deauthorize } = authSlice.actions
export default persistReducer(persistConfig, authSlice.reducer)
