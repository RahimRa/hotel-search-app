import React from "react"
import { nanoid } from "nanoid"
import styles from "./Input.module.css"
import classNames from "classnames"

export const Input = ({ error, label, value, onChange, name, type }) => {
  const inputId = nanoid()

  return (
    <div className={styles.wrapper}>
      <label className={classNames(styles.label, { [styles.labelError]: error })} for={inputId}>
        {label}
      </label>

      <input
        autoComplete="off"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={classNames(styles.input, { [styles.inputError]: error })}
        id={inputId}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}

{
}
