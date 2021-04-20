import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/rootReducer'
import CategoriesService, { Categories } from './CategoriesService'
import handleThunk, {
  SliceErrorBase,
  SliceLoadingBase,
} from '@velialiev/redux-toolkit-handle-thunk'

interface State {
  categories: Categories
  loading: SliceLoading
  error: SliceError
}

const initialState: State = {
  categories: {},
  loading: {},
  error: {},
}

const getSliceState = (state: RootState) => state.sidebar

export const sidebarSelectors = {
  getCategories: (state: RootState) => getSliceState(state).categories,
  getLoading: (state: RootState) => getSliceState(state).loading,
  getError: (state: RootState) => getSliceState(state).error,
}

const thunks = {
  fetchCategories: createAsyncThunk('sidebar/fetchCategories', async () => {
    return CategoriesService.get()
  }),
}

export const { fetchCategories } = thunks

const categoriesSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    handleThunk(builder, fetchCategories, (state, payload) => {
      state.categories = payload
    })
  },
})

type ThunkNamesUnion = keyof typeof thunks
type SliceLoading = SliceLoadingBase<ThunkNamesUnion>
type SliceError = SliceErrorBase<ThunkNamesUnion>

export default categoriesSlice.reducer
