import React from "react"
import { HotelDetails } from "../../components/HotelDetails/HotelDetails"
import styles from "./Main.module.css"
import { City } from "../City/City"
import { useSelector } from "react-redux"
import { Slider } from "../Slider/Slider"

export const Main = () => {
  const { location, daysNumbers, checkIn, error, hotels } = useSelector((state) => state.hotels)

  const text = ["отелей", "отеля", "отель"]

  const f = () => {
    const hotelsNumber = hotels.filter((elem) => elem.isFavorite).length
    if (
      String(hotelsNumber)[String(hotelsNumber).length - 2] === "1" ||
      ["0", "5", "6", "7", "8", "9"].includes(String(hotelsNumber)[String(hotelsNumber).length - 1])
    ) {
      return text[0]
    }
    if (["2", "3", "4"].includes(String(hotelsNumber)[String(hotelsNumber).length - 1])) {
      return text[1]
    }
    if (String(hotelsNumber)[String(hotelsNumber).length - 1] === "1") {
      return text[2]
    }
  }

  return (
    <div className={styles.main}>
      <City location={location} checkIn={checkIn} />
      <Slider />
      <div className={styles.favorites}>
        <span className={styles.text}>Добавлено в Избранное :</span>
        <div className={styles.lenght}>{hotels.filter((elem) => elem.isFavorite).length}</div>
        <span className={styles.text}>{f()}</span>
      </div>
      {error ? (
        <div className={styles.info}>{error}</div>
      ) : !hotels.length ? (
        <div className={styles.info}>Список пуст</div>
      ) : (
        <HotelDetails hotels={hotels} checkIn={checkIn} daysNumbers={daysNumbers} />
      )}
    </div>
  )
}
