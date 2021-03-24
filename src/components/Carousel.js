import React from 'react'
import ImageSwitcher from './ImageSwitcher'
import ImageIndices from './ImageIndices'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexFlow: 'column'
  },
  wrapper: {
    width: '100%',
    height: '100%'
  },
  slide: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundImage: imgs => 'linear-gradient(to left, red 50%, black 50%)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '200% 100%',
    transition: 'background-position 1s',
    '&:hover': {
      backgroundPosition: '100% 0'
    }
  }
})

const Carousel = ({
  currImage,
  oldImage,
  onCLickLeftHandler,
  onClickRightHandler,
  jumptToImage,
  index
}) => {
  // const classes = useStyles(currImage)
  const classes = useStyles({ old: oldImage, new: currImage })

  return (
    <div className={classes.wrapper}>
      <div className={classes.slide} />
      <div className={classes.content}>
      <ImageSwitcher
        onCLickLeftHandler={onCLickLeftHandler}
        onClickRightHandler={onClickRightHandler}
      />
      <ImageIndices
        index={index}
        jumptToImage={jumptToImage}
      />
    </div>
    </div>
  )
}

export default Carousel
