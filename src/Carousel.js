import React from 'react'

const Carousel = ({ src }) => {
  const style = {
    backgroundImage: `url("${src}")`
  }

  return (
    <div style={style}>
        <button>Previous</button>
        <button>Next</button>
    </div>
  )
}

export default Carousel
