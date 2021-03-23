import React from 'react'
import leftArrow from '../left-arrow.png'
import rightArrow from '../next.png'

const ImageSwitcher = ({
  onCLickLeftHandler, onClickRightHandler
}) => (
    <div className="imageSwitcher">
        <button className="left" onClick={onCLickLeftHandler}>
          <img src={leftArrow} />
        </button>
        <button className="right" onClick={onClickRightHandler}>
          <img src={rightArrow} />
        </button>
      </div>
)

export default ImageSwitcher
