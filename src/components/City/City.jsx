import { format } from "date-fns/esm"
import React from "react"
import VectorImg from "../../img/homepagePictures/Vector.svg"
import styles from "./City.module.css"
export const City = ({ location, checkIn }) => {
  const date = format(new Date(checkIn), "PP")
  return (
    <div className={styles.wrapper}>
      <div className={styles.city}>
        <span>Отели</span>
        <img src={VectorImg} className={styles.img} />
        <div>{location}</div>
      </div>
      <div className={styles.checkIn}>{date}</div>
    </div>
  )
}
