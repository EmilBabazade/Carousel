import React from 'react'
import ImageSwitcher from './ImageSwitcher'
import ImageIndices from './ImageIndices'
import { createUseStyles } from 'react-jss'

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
    width: imgCount => `${imgCount * 100}vw`
  },
  slide: {
    position: 'absolute',
    width: '100vw',
    height: '100%',
    transition: 'all 0.25s'
  }
})

const Carousel = ({
  images
}) => {
  // const classes = useStyles(currImage)
  const classes = useStyles(images.length)

  let style = {}

  const onClickLeft = (evt) => {
    evt.preventDefault()
    style = {
      left: '400px'
    }
  }

  const slides = images.map((i, k) => <img style={style} className={classes.slide} src={i} key={k}/>)

  return (
    <div className={classes.wrapper}>
      <div className={classes.slider}>
        {slides}
      </div>
      <div className={classes.content}>
        <ImageSwitcher
          onCLickLeftHandler={onClickLeft}
        />
      </div>
    </div>
  )
}

export default Carousel
