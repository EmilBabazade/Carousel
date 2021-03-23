import React from 'react'
import ImageSwitcher from './ImageSwitcher'
import ImageIndices from './ImageIndices'
import { createUseStyles } from 'react-jss'

const Carousel = ({
  currImage,
  oldImage,
  onCLickLeftHandler,
  onClickRightHandler,
  jumptToImage,
  index
}) => {
  const useStyles = createUseStyles({
    content: {
      width: '100%',
      height: '100%',
      backgroundImage: img => `url("${img}")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      display: 'flex',
      flexFlow: 'column'
    }
  })
  const classes = useStyles(currImage)

  return (
    <div className={classes.content}>
      <ImageSwitcher
        onCLickLeftHandler={onCLickLeftHandler}
        onClickRightHandler={onClickRightHandler}
      />
      {/* <ImageIndices
        index={index}
        jumptToImage={jumptToImage}
      /> */}
    </div>
  )
}

export default Carousel
