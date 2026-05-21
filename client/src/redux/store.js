import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./userSLice"
export default configureStore({
  reducer: {
    user:userSlice
  },
})