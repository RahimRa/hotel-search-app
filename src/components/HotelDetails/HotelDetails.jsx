import React from "react"
import { Hotel } from "../Hotel/Hotel"
import styles from "./HotelDetails.module.css"
import { useSelector } from "react-redux"

export const HotelDetails = ({ hotels, daysNumbers, checkIn }) => {


  return (
    <div className={styles.hotelDetails}>
      <div>
        {hotels
          .filter((elem) => !elem.isFavorite)
          .map((hotel) => (
            <Hotel checkIn={checkIn} daysNumbers={daysNumbers} {...hotel} />
          ))}
      </div>
    </div>
  )
}
