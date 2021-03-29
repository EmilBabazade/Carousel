import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  slide: {
    position: 'inline',
    width: '100vw',
    height: '100%',
    pointerEvents: 'none'
  }
})

const Slide = ({ src }) => {
  const classes = useStyles()

  return (
        <img mous className={classes.slide} src={src} />
  )
}

export default Slide
