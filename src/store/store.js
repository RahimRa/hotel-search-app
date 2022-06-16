import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./slices/authSlice"
import hotelsSlice from "./slices/hotelsSlice"

const rootReducer = {
  auth: authSlice,
  hotels: hotelsSlice
}

export const store = configureStore({ reducer: rootReducer })
