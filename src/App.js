import React from 'react'
import Carousel from './components/Carousel'
// import Carousel from './components/trashCarousel'
import images from './utils/images'

const App = () => {
<<<<<<< HEAD
  const [currImage, setCurrImage] = useState(images[0])
  const [index, setIndex] = useState(0)

  const changeIndex = (offset) => {
    if (offset !== 1 && offset !== -1) {
      console.log(`invalid offsett value of ${offset} for index`)
      return
    }

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
    setIndex(newIndex)
    setCurrImage(images[newIndex])
  }

  return (
        <>
            <Carousel
                currImage={currImage}
                onCLickLeftHandler={onClickLeft}
                onClickRightHandler={onClickRight}
                jumptToImage={jumptToImage}
                index={index}
                imgCount={images.length} />
=======
  // eslint-disable-next-line no-unused-vars
  // const [carouselImages, _setCarouselImages] = useState(images)

  return (
        <>
            {/* <Carousel
              images={carouselImages} /> */}
              <Carousel images={images} />
>>>>>>> carousel_many_images
        </>
  )
}

export default App
