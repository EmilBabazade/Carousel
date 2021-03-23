import React from 'react'
import leftArrow from './left-arrow.png'
import rightArrow from './next.png'

const Carousel = ({ src }) => {
  const style = {
    backgroundImage: `url("${src}")`
  }

  return (
    <div style={style}>
        <button>
          <img src={leftArrow} />
        </button>
        <button>
          <img src={rightArrow} />
        </button>
    </div>
  )
}

export default Carousel
