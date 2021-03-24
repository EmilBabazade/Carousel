import React from 'react'
import ImageSwitcher from './ImageSwitcher'
import ImageIndices from './ImageIndices'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: {
    position: 'relative'
  },
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
    height: '100%'
  },
  slider: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    overflow: 'hidden'
  },
  slide: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    transition: '1s',
    '&:hover': {
      left: '100px'
    }
  }
})

const Carousel = ({
  currImage,
  oldImage,
  onCLickLeftHandler,
  onClickRightHandler,
  jumptToImage,
  index,
  imgCount
}) => {
  const classes = useStyles(imgCount)

  return (
    <div className={classes.wrapper}>
      <div className={classes.slider}>
        <img src={oldImage} className={classes.slide} />
        <img src={currImage} className={classes.slide} />
      </div>
      <div className={classes.content}>
        <ImageSwitcher
          onCLickLeftHandler={onCLickLeftHandler}
          onClickRightHandler={onClickRightHandler}
        />
        <ImageIndices
          index={index}
          jumptToImage={jumptToImage}
          imgCount={imgCount}
        />
      </div>
    </div>
  )
}

export default Carousel
