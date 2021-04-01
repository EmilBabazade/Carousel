import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  slide: {
    width: '100vw',
    height: '100vh',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': {
      width: '100vw',
      height: '100vh',
      objectFit: 'cover',
      position: 'absolute'
    }
  }
})

const Slide = ({ element }) => {
  const classes = useStyles()

  return (
    <div className={classes.slide}>
      {element}
    </div>
  )
}

export default Slide
