import React from 'react'
import Carousel from './components/Carousel'
// import Carousel from './components/trashCarousel'
import images from './utils/images'

const App = () => {
  // eslint-disable-next-line no-unused-vars
  // const [carouselImages, _setCarouselImages] = useState(images)

  return (
        <>
            {/* <Carousel
              images={carouselImages} /> */}
              <Carousel images={images} />
        </>
  )
}

export default App
