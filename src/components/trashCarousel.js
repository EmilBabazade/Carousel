import React, { useState } from 'react'
import Slide from '../components/Slide'
import { createUseStyles } from 'react-jss'

const useStyle = createUseStyles({
  slider: {
    height: '100%',
    width: '800%',
    display: 'relative'
  },
  sliderLeft: {
    height: '100%',
    width: '800%',
    display: 'relative',
    transitionDuration: '0.5s',
    transform: 'translate(-100vw)'
  },
  container: {
    overflow: 'hidden'
  },
  button: {
    display: 'absolute'
  }
})

const TrashCarousel = ({ images }) => {
  const [isLeft, setIsLeft] = useState(false)
  const classes = useStyle()

  const sliderClass = isLeft ? classes.sliderLeft : classes.slider

  const clickLeft = (env) => {
    env.preventDefault()
    setIsLeft(true)
  }

  return (
      <div className={classes.container}>
        <div className={sliderClass}>
            {images.map((img, i) =>
                <Slide src={img} key={i}/>
            )}
        </div>
        <button onClick={clickLeft} className={classes.button}>LEFT</button>
    </div>
  )
}

export default TrashCarousel
