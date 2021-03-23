import React, { useState } from 'react'
import Carousel from './components/Carousel'
import images from './utils/images'

const App = () => {
  const [currImage, setCurrImage] = useState(images[0])
  const [oldImage, setOldImage] = useState(images[0])
  const [index, setIndex] = useState(0)

  const changeIndex = (offset) => {
    if (offset !== 1 && offset !== -1) {
      console.log(`invalid offsett value of ${offset} for index`)
      return
    }

    setOldImage(images[index])

    let newIndex = 0
    if (index + offset === -1) {
      newIndex = images.length - 1
    } else if (index + offset === images.length) {
      newIndex = 0
    } else {
      newIndex = index + offset
    }

    setIndex(newIndex)
    setCurrImage(images[newIndex])
  }

  const onClickLeft = (evt) => {
    evt.preventDefault()
    changeIndex(-1)
  }

  const onClickRight = (evt) => {
    evt.preventDefault()
    changeIndex(1)
  }

  const jumptToImage = (newIndex) => {
    setOldImage(images[index])
    setIndex(newIndex)
    setCurrImage(images[newIndex])
  }

  return (
        <>
            <Carousel
                currImage={currImage}
                oldImage={oldImage}
                onCLickLeftHandler={onClickLeft}
                onClickRightHandler={onClickRight}
                jumptToImage={jumptToImage}
                index={index} />
        </>
  )
}

export default App
