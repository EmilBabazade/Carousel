import React from 'react'
import leftArrow from './left-arrow.png'
import rightArrow from './next.png'
import images from './utils/images'

const Carousel = ({
  image,
  onCLickLeftHandler,
  onClickRightHandler,
  jumptToImage,
  currIndex
}) => {
  const style = {
    backgroundImage: `url("${image}")`
  }

  const colorChange = {
    color: '#F2F5FA'
  }

  const indices = images.map((_, idx) => {
    if (idx === currIndex) {
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
      <div className="buttons">
        <button className="left" onClick={onCLickLeftHandler}>
          <img src={leftArrow} />
        </button>
        <button className="right" onClick={onClickRightHandler}>
          <img src={rightArrow} />
        </button>
      </div>
      <ul>
        {indices}
      </ul>
    </div>
  )
}

export default Carousel
