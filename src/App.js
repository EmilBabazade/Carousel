import React from 'react'
import Carousel from './components/Carousel'
import images from './utils/images'

const App = () => {
  return (
        <>
              <Carousel slides={images} />
        </>
  )
}

export default App
