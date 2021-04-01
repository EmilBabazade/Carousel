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
      textAlign: 'center',
      display: 'inline-flex',
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 0
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
