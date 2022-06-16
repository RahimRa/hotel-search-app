import React from 'react'
import GoldenStar from "../../img/stars/GoldenStar.png"
import Star from "../../img/stars/Star.png"

export const StarsList = ({stars = 0}) => {

  return new Array(5)
    .fill(null)
    .map((_, index) => (index >= stars ? <img src={Star} /> : <img src={GoldenStar} />))
}
