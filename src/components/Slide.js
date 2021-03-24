import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  slide: {
    width: `${100 / 8}%`,
    height: '100%'
  }
})

const Slide = ({ src }) => {
  const classes = useStyles()

  return (
        <img className={classes.slide} src={src} />
  )
}

export default Slide
