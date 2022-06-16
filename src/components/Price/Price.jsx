import React from 'react'
import style from './Price.module.css'

export const Price = ({ priceFrom }) => {
  return (
    <div>
      <span className={style.title}>Price:</span>
      {priceFrom}
    </div>
  )
}
