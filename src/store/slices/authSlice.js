import { createSlice} from "@reduxjs/toolkit"

const initialState = {
  login: "Rahim@mail.ru",
  password: "",
  isAuth: JSON.parse(localStorage.getItem("isAuth")),
  errorMessage: "",
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    auth(state, action) {
      if (state.login === action.payload.login && state.password === action.payload.password) {
        state.isAuth = true
        localStorage.setItem("isAuth", "true")
      } else {
        state.errorMessage = "Неверный логин или пароль"
      }
    },
    logout(state, action) {
      state.isAuth = false
      localStorage.setItem("isAuth", "false")
    },
  },
})

export const { auth, logout } = authSlice.actions
export default authSlice.reducer
