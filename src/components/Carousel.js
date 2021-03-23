import React from 'react'
import ImageSwitcher from './ImageSwitcher'
import ImageIndices from './ImageIndices'

const Carousel = ({
  currImage,
  oldImage,
  onCLickLeftHandler,
  onClickRightHandler,
  jumptToImage,
  index
}) => {
  const style = {
    backgroundImage: `url("${currImage}")`
  }

  return (
    <div className="content" style={style}>
      <ImageSwitcher
        onCLickLeftHandler={onCLickLeftHandler}
        onClickRightHandler={onClickRightHandler}
      />
      <ImageIndices
        index={index}
        jumptToImage={jumptToImage}
      />
    </div>
  )
}

export default Carousel
