import React from 'react'
import leftArrow from './left-arrow.png'
import rightArrow from './next.png'
import images from './utils/images'

const Carousel = ({
  image,
  onCLickLeftHandler,
  onClickRightHandler,
  jumptToImage
}) => {
  const style = {
    backgroundImage: `url("${image}")`
  }

  return (
    <div className="content" style={style}>
      <div className="buttons">
        <button className="left" onClick={onCLickLeftHandler}>
          <img src={leftArrow} />
        </button>
        <button className="right" onClick={onClickRightHandler}>
          <img src={rightArrow} />
        </button>
      </div>
      <ul>
        {images.map((i, k) =>
          <li key={k} onClick={evt => jumptToImage(k)}>
            {k}
          </li>
        )}
      </ul>
    </div>
  )
}

export default Carousel
