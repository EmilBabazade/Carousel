import React from 'react'
import images from '../utils/images'
import ImageSwitcher from './ImageSwitcher'

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

  const colorChange = {
    color: '#F2F5FA'
  }

  const indices = images.map((_, idx) => {
    if (idx === index) {
      return (
          <li style={colorChange} key={idx} onClick={evt => jumptToImage(idx)}>
            {idx}
          </li>
      )
    } else {
      return (
            <li key={idx} onClick={evt => jumptToImage(idx)}>
            {idx}
          </li>
      )
    }
  })

  return (
    <div className="content" style={style}>
      <ImageSwitcher
        onCLickLeftHandler={onCLickLeftHandler}
        onClickRightHandler={onClickRightHandler}
      />
      <ul>
        {indices}
      </ul>
    </div>
  )
}

export default Carousel
