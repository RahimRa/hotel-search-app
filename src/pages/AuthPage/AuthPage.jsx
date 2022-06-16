import React, { useEffect } from "react"
import { Button } from "../../components/Button/Button"
import { Input } from "../../components/Input/Input"
import styles from "./AuthPage.module.css"
import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { auth } from "../../store/slices/authSlice"
import { useNavigate } from "react-router-dom"
import * as yup from "yup"

export const AuthPage = () => {
  const dispatch = useDispatch()
  const authData = useSelector((state) => state.auth)
  const navigate = useNavigate()

  const validationSchema = yup.object({
    login: yup.string().required("Oбязательное поле").email("Невалидный email"),
    password: yup
      .string()
      .required("Oбязательное поле")
      .min(8, "Минимум 8 символов")
      .matches("^[a-zA-Z0-9]+$", {
        message: "Кириллица запрещена",
      }),
  })

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validateOnChange: false,
    validationSchema,
    onSubmit: (values) => {
      dispatch(auth(values))
    },
  })

  useEffect(() => {
    if (authData.isAuth) {
      navigate("/main")
    }
  }, [authData.isAuth])

  return (
    <div className={styles.authPage}>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <h1 className={styles.title}>Simple Hotel Check</h1>
          <Input
            type="text"
            name="login"
            onChange={formik.handleChange}
            value={formik.values.login}
            label="Логин"
            error={formik.errors.login || authData.errorMessage}
          />
          <Input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            label="Пароль"
            error={formik.errors.password || authData.errorMessage}
          />

          <Button marginTop='15px' onClick={formik.handleSubmit}>Войти</Button>
        </div>
      </div>
    </div>
  )
}
