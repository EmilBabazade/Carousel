import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SlideIndices from './SwitchSlidesByIndices'
import { createUseStyles } from 'react-jss'
import Slide from './Slide'

const useStyles = createUseStyles({
  content: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'end'
  },
  wrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: 'bisque'
  },
  slider: {
    position: 'absolute',
    height: '100%',
    width: props => `${props.slideCount * props.slideWidth}vw`,
    transitionDuration: '0.5s',
    transform: props => `translate(-${props.index * props.slideWidth}vw)`
  }
})

const Carousel = ({
  slides
}) => {
// check to make sure slides is an array of valid react elements
  const isValid = slides.some(s => !React.isValidElement(s))
  if (isValid) {
    console.error('invalid input to Carousel, you can only pass array of react elements')
    return
  }

  const [currIdx, setCurrIdx] = useState(0)
  const [isSwiping, setSwiping] = useState(false)
  const [movementX, setMovementX] = useState(0)
  const [previousTouch, setPreviousTouch] = useState(undefined)

  const styleClasses = useStyles({
    slideCount: slides.length, slideWidth: 100, index: currIdx
  })

  const slideLeft = () => {
    if (currIdx === 0) {
      setCurrIdx(slides.length - 1)
    } else {
      setCurrIdx(currIdx - 1)
    }
  }

  const slideRight = () => {
    if (currIdx === slides.length - 1) {
      setCurrIdx(0)
    } else {
      setCurrIdx(currIdx + 1)
    }
  }

  const jumptToImage = (index) => {
    if (index < 0 || index > slides.length) {
      // most likely will never happen, but you just in case
      console.log(`invalid index to jump ${index}`)
      return
    }
    setCurrIdx(index)
  }

  const down = () => setSwiping(false)
  const move = (e) => {
    setMovementX(e.movementX)
    setSwiping(true)
  }
  const up = () => {
    if (isSwiping) {
      if (movementX < 0) {
        slideRight()
      } else if (movementX > 0) {
        slideLeft()
      }
      setSwiping(false)
    }
  }

  // onTouchMove doesn't have any movementX property
  const mobileMove = (e) => {
    const touch = e.touches[0]

    if (previousTouch) {
      setMovementX(touch.pageX - previousTouch.pageX)
    }

    setPreviousTouch(touch)
    setSwiping(true)
  }

  return (
    <div
        onMouseDown={down}
        onMouseUp={up}
        onMouseMove={move}
        onTouchStart={down}
        onTouchMove={mobileMove}
        onTouchEnd={up}
        className={styleClasses.wrapper}
      >
      <div className={styleClasses.slider}>
        {slides.map((i, k) => <Slide element={i} key={k}/>)}
      </div>
      <div className={styleClasses.content}>
        <SlideIndices
          index={currIdx}
          jumptToSlide={jumptToImage}
          slideCount={slides.length}
        />
      </div>
    </div>
  )
}

Carousel.propTypes = {
  slides: PropTypes.array
}

export default Carousel
