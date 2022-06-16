import axios from "axios"
import { format } from "date-fns"

export const getHotels = ({ location, checkIn, checkOut }) => {
  const formatedCheckIn = format(new Date(checkIn), "yyyy-MM-dd")
  const formatedCheckOut = format(new Date(checkOut), "yyyy-MM-dd")

  const apiUrl = `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${formatedCheckIn}&checkOut=${formatedCheckOut}&limit=40`
  return axios.get(apiUrl).then((resp) => resp.data)
}
