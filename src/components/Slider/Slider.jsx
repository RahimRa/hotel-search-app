import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import styles from "./Slider.module.css"
import images from "../../img/pictureСarousel/images"

export const Slider = () => {
  const [width, setWidth] = useState(0)
  const carousel = useRef()

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <div className={styles.wrapper}>
      <motion.div ref={carousel} className={styles.caruosel} whileTap={{ cursor: "grabbing" }}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className={styles.innerCaruosel}
        >
          {images.map((image) => {
            return (
              <motion.div className={styles.item} key={image}>
                <img src={image} alt="" />
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  )
}
