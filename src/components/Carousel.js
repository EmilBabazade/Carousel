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
  slide: {
    position: 'absolute',
    width: '100%',
    height: '100%'
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
  const classes = useStyles()

  return (
    <div>
      <img src={currImage} className={classes.slide} />
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
