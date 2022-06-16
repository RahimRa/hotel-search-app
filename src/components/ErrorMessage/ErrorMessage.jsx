import React from 'react'
import styles from './ErrorMessage.module.css'
export const ErrorMessage = ({error}) => {
  return (
    <div className={styles.error}>{error}</div>
  )
}
