import React from "react"
import Like from "../../img/like/Like.svg"
import styles from "./Hotel.module.css"
import RectangleImg from "../../img/favoritesPictures/Rectangle.svg"
import lastelement from "../../img/favoritesPictures/Rectangle 40.png"
import { StarsList } from "../StartsList/StarsList"
import { Price } from "../Price/Price"
import UnLike from "../../img/like/UnLike.svg"
import { useDispatch } from "react-redux"
import { toggleFavarite } from "../../store/slices/hotelsSlice"
import Avatar from "../../img/avatar/house.png"
import { format } from "date-fns/esm"

export const Hotel = ({
  isFavorite,
  hotelName,
  hotelId,
  stars = 0,
  priceFrom,
  daysNumbers,
  checkIn,
}) => {
  const dispatch = useDispatch()
  const date = format(new Date(checkIn), "PP")

  return (
    <div className={styles.wrapper}>
      {!isFavorite && (
        <div className={styles.avatar}>
          <img src={Avatar} />
        </div>
      )}

      <div className={styles.hotelDetails}>
        <div className={styles.header}>
          {hotelName}
          <div onClick={() => dispatch(toggleFavarite(hotelId))}>
            {isFavorite ? <img src={Like} /> : <img src={UnLike} />}
          </div>
        </div>

        <div className={styles.date}>
          {date}
          <img className={styles.img} src={RectangleImg} />
          {daysNumbers}
        </div>
        <div className={styles.item}>
          <div>
            <StarsList stars={stars} />
          </div>
          <div>
            <Price priceFrom={priceFrom} />
          </div>
        </div>
        <div>
          {" "}
          <img src={lastelement} />
        </div>
      </div>
    </div>
  )
}

// const a = [
//   {
//     stars: 5,
//     hotelName: "Moscow Marriott Grand Hotel",
//     hotelId: 333578,
//     pricePercentile: { 35: 7200.0, 99: 7200.0, 3: 7200.0, 50: 7200.0, 10: 7200.0, 75: 7200.0 },
//     priceAvg: 7200.0,
//     priceFrom: 7200.0,
//     location: {
//       geo: { lon: 37.617508, lat: 55.752041 },
//       name: "Moscow",
//       country: "Russia",
//       state: null,
//     },
//     locationId: 12153,
//   },
// ]
