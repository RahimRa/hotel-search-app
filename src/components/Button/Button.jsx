import React from "react"
import styles from "./Button.module.css"

export const Button = ({ onClick, children ,marginTop }) => {
  return (
    <button style={{marginTop}} onClick={onClick} className={styles.button}>
      {children}
    </button>
  )
}
