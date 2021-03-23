import React, { useState } from 'react'
import Carousel from './Carousel'
import images from './utils/images'

const App = () => {
  const [currImage, setCurrImage] = useState(images[0])
  const [currIndex, setCurrIndex] = useState(0)

  const onClickLeft = (evt) => {
    evt.preventDefault()
    const newIndex = currIndex !== 0
      ? currIndex - 1
      : images.length - 1
    setCurrIndex(newIndex)
    setCurrImage(images[newIndex])
  }

  const onClickRight = (evt) => {
    evt.preventDefault()
    const newIndex = currIndex !== (images.length - 1)
      ? currIndex + 1
      : 0
    setCurrIndex(newIndex)
    setCurrImage(images[newIndex])
  }

  const jumptToImage = (newIndex) => {
    setCurrIndex(newIndex)
    setCurrImage(images[newIndex])
  }

  return (
        <>
            <Carousel
                image={currImage}
                onCLickLeftHandler={onClickLeft}
                onClickRightHandler={onClickRight}
                jumptToImage={jumptToImage} />
        </>
  )
}

export default App
