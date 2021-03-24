import React, { useState } from 'react'
import Carousel from './components/Carousel'
import images from './utils/images'

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [carouselImages, _setCarouselImages] = useState(images)

  return (
        <>
            <Carousel
              images={carouselImages} />
        </>
  )
}

export default App
