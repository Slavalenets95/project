import { combineReducers } from '@reduxjs/toolkit'
import authReducer from '../features/Auth/authSlice'
import sidebarReducer from '../components/Sidebar/categoriesSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  sidebar: sidebarReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
