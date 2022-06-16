import React from "react"
import { Input } from "../Input/Input"
import { Button } from "../Button/Button"
import styles from "./FiltrationUnit.module.css"

export const FiltrationUnit = ({ formik }) => {
  return (
    <div className={styles.wrapper}>
      <Input
        name="location"
        value={formik.values.location}
        onChange={formik.handleChange}
        type="text"
        label="Локация"
      />
      <Input
        name="checkIn"
        value={formik.values.checkIn}
        onChange={formik.handleChange}
        type="date"
        label="Дата заселения"
      />
      <Input
        name="daysNumbers"
        value={formik.values.daysNumbers}
        onChange={formik.handleChange}
        type="number"
        label="Количество дней"
      />
      <Button marginTop="15px" onClick={formik.handleSubmit}>
        Найти
      </Button>
    </div>
  )
}
