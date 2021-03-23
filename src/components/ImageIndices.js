import React from 'react'
import images from '../utils/images'
// import createUseStyles from 'react-jss'
// import colors from '../utils/colors'

const ImageIndices = ({ jumptToImage, index }) => {
  const indices = images.map((_, idx) => {
    if (idx === index) {
      return (
              <li key={idx} onClick={evt => jumptToImage(idx)}>
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
