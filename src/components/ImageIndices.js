import React from 'react'
import images from '../utils/images'

const ImageIndices = ({ jumptToImage, index }) => {
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
      <ul>
          {indices}
      </ul>
  )
}

export default ImageIndices
