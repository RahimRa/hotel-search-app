import React from "react"
import styles from "./Favorites.module.css"

import { Hotel } from "../Hotel/Hotel"
import { useSelector } from "react-redux"
import { useState } from "react"

export const Favorites = ({ daysNumbers, checkIn }) => {
  const [filter, setFilter] = useState("")
  const hotels = useSelector((state) => state.hotels.hotels)

  const filterHotels = (list) => {
    return [...list].filter((elem) => elem.isFavorite).sort((a, b) => b[filter] - a[filter])
  }

  return (
    <div className={styles.wrapper}>
      <span className={styles.span}>Избранное</span>
      <div className={styles.filter}>
        <button onClick={() => setFilter("stars")} className={styles.button}>
          Рейтинг
        </button>
        <button onClick={() => setFilter("priceFrom")} className={styles.button}>
          Цена
        </button>
      </div>
      {filterHotels(hotels).map((hotel) => (
        <Hotel checkIn={checkIn} daysNumbers={daysNumbers} {...hotel} />
      ))}
    </div>
  )
}
