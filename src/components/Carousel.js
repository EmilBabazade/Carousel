import React from 'react'
import ImageSwitcher from './ImageSwitcher'
import ImageIndices from './ImageIndices'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  '@keyframes slideBackground': {
    // from: {
    //   background: imgs => `url("${imgs.old}")`
    // },
    // to: {
    //   background: imgs => `url("${imgs.new}")`
    // }
  },
  container: {
    position: 'relative'
  },
  content: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    // backgroundImage: imgs => `url("${imgs.new}")`,
    animationName: '$slideBackground',
    animationDuration: '4s',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
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
  index
}) => {
  // const classes = useStyles(currImage)
  const classes = useStyles({ old: oldImage, new: currImage })

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
        />
      </div>
    </div>
  )
}

export default Carousel
