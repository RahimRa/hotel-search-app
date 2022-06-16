import React, { useEffect } from "react"
import { LogOut } from "../../components/Logout/LogOut"
import style from "./PersonalArea.module.css"
import { useNavigate } from "react-router-dom"
import { FiltrationUnit } from "../../components/FiltrationUnit/FiltrationUnit"
import { Favorites } from "../../components/Favorites/Favorites"

import { getHotels } from "../../api/getHotels"
import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import { format, addDays } from "date-fns"
import { useSelector } from "react-redux"
import { setList, setError } from "../../store/slices/hotelsSlice"
import { Main } from "../../components/Main/Main"

export const PersonalArea = () => {
  const authData = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      location: "Moscow",
      checkIn: format(new Date(), "yyyy-MM-dd"),
      daysNumbers: 1,
    },
    onSubmit: ({ location, checkIn, daysNumbers }) => {
      const checkOut = addDays(new Date(checkIn), daysNumbers)
      getHotels({ location, checkIn, checkOut })
        .then((data) => {
          const hotels = data.map((hotel) => ({ ...hotel, isFavorite: false }))
          dispatch(setList({ hotels, location, checkIn, daysNumbers }))
        })
        .catch((error) => dispatch(setError({ error: error.response.data.message })))
    },
  })

  useEffect(() => {
    const { location, checkIn, daysNumbers } = formik.values
    const checkOut = addDays(new Date(checkIn), daysNumbers)
    getHotels({ location, checkIn, checkOut })
      .then((data) => {
        const hotels = data.map((hotel) => ({ ...hotel, isFavorite: false }))
        dispatch(setList({ hotels, location, checkIn, daysNumbers }))
      })
      .catch((error) => dispatch(setError({ error: error.response.data.message })))
  }, [])

  useEffect(() => {
    if (!authData.isAuth) {
      navigate("/")
    }
  }, [authData.isAuth])

  return (
    <div className={style.box}>
      <div className={style.wrapper}>
        <h1 className={style.title}>Simple Hotel Check</h1>
        <LogOut />
      </div>
      <div className={style.item}>
        <div>
          <FiltrationUnit formik={formik} />
          <Favorites checkIn={formik.values.checkIn} daysNumbers={formik.values.daysNumbers} />
        </div>
        <div>
          <Main />
        </div>
      </div>
    </div>
  )
}
