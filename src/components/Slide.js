import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  slide: {
    position: 'inline',
    width: '100vw',
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
