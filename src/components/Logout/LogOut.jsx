import React from "react"
import styles from "./LogOut.module.css"
import logoutImg from "../../img/logout.svg"
import { useDispatch } from "react-redux"
import { logout } from "../../store/slices/authSlice"

export const LogOut = () => {
  const dispatch = useDispatch()

  const handleLogout = () => dispatch(logout())

  return (
    <div className={styles.wrapper} onClick={handleLogout}>
      <button className={styles.logout}>Выйти</button>
      <img className={styles.img} src={logoutImg} />
    </div>
  )
}
