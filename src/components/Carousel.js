import React, { useState } from 'react'
import ImageSwitcher from './ImageSwitcher'
// import ImageIndices from './ImageIndices'
import { createUseStyles } from 'react-jss'

const slideWidth = 100

const useStyles = createUseStyles({
  content: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexFlow: 'column'
  },
  wrapper: {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },
  slider: {
    position: 'absolute',
    height: '100%',
    width: imgCount => `${imgCount * slideWidth}vw`
  },
  slide: {
    position: 'absolute',
    width: `${slideWidth}vw`,
    height: '100%'
  }
})

const Carousel = ({
  images
}) => {
  const [currIdx, setCurrIdx] = useState(0)

  // const classes = useStyles(currImage)
  const classes = useStyles(images.length)

  const onClickLeft = (evt) => {
    evt.preventDefault()
  }

  let style = {}
  const onClickRight = (evt) => {
    evt.preventDefault()
    console.log('hello')
    style = {
      // transitionDuration: '0.5s',
      // transform: `translate(-${slideWidth}px)`
      color: 'red'
    }
    setCurrIdx(currIdx + 1)
  }

  const slides = images.map((i, k) => <img style={style} className={classes.slide} src={i} key={k}/>)

  return (
    <div className={classes.wrapper}>
      <div className={classes.slider} style={style}>
        {slides}
      </div>
      <div className={classes.content}>
        <ImageSwitcher
          onCLickLeftHandler={onClickLeft}
          onClickRightHandler={onClickRight}
        />
      </div>
    </div>
  )
}

export default Carousel
