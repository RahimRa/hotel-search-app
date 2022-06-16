import { createSlice } from "@reduxjs/toolkit"
import { format } from "date-fns"

const initialState = {
  location: "Moscow",
  checkIn: format(new Date(), "yyyy-MM-dd"),
  daysNumbers: 1,
  hotels: [],
  error: "",
}

const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    setList(state, action) {
      return { ...state, ...action.payload, error: "" }
    },
    toggleFavarite(state, action) {
      const hotelId = action.payload
      const hotel = state.hotels.find((hotel) => hotel.hotelId === hotelId)
      hotel.isFavorite = !hotel.isFavorite
    },
    setError(state, action) {
      state.error = action.payload.error
    },
  },
})

export const { setList, toggleFavarite, setError } = hotelsSlice.actions
export default hotelsSlice.reducer
