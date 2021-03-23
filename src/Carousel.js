import React from 'react'
import leftArrow from './left-arrow.png'
import rightArrow from './next.png'

const Carousel = ({ image, onCLickLeftHandler, onClickRightHandler }) => {
  const style = {
    backgroundImage: `url("${image}")`
  }

  return (
    <div style={style}>
        <button onClick={onCLickLeftHandler}>
          <img src={leftArrow} />
        </button>
        <button onClick={onClickRightHandler}>
          <img src={rightArrow} />
        </button>
    </div>
  )
}

export default Carousel
