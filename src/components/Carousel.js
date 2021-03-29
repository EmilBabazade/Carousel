import React, { useState } from 'react'
import ImageSwitcher from './ImageSwitcher'
import ImageIndices from './ImageIndices'
import { createUseStyles } from 'react-jss'
import Slide from './Slide'

const useStyles = createUseStyles({
  content: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexFlow: 'column'
  },
  wrapper: {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },
  slider: {
    position: 'absolute',
    height: '100%',
    width: props => `${props.imgCount * props.slideWidth}vw`,
    transitionDuration: '0.5s',
    transform: props => `translate(-${props.index * props.slideWidth}vw)`
  }
})

const Carousel = ({
  images
}) => {
  const [currIdx, setCurrIdx] = useState(0)
  const [isSwiping, setSwiping] = useState(false)
  const [movementX, setMovementX] = useState(0)
  const [previousTouch, setPreviousTouch] = useState(undefined)

  const styleClasses = useStyles({
    imgCount: images.length, slideWidth: 100, index: currIdx
  })

  const slideLeft = () => {
    if (currIdx === 0) {
      setCurrIdx(images.length - 1)
    } else {
      setCurrIdx(currIdx - 1)
    }
  }

  const slideRight = () => {
    if (currIdx === images.length - 1) {
      setCurrIdx(0)
    } else {
      setCurrIdx(currIdx + 1)
    }
  }

  const jumptToImage = (index) => {
    if (index < 0 || index > images.length) {
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
  const mobileMove = (e) => {
    const touch = e.touches[0]

    if (previousTouch) {
      setMovementX(touch.pageX - previousTouch.pageY)
    }

    setPreviousTouch(touch)
    setSwiping(true)
  }

  const slides = images.map((i, k) => <Slide src={i} key={k}/>)

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
        {slides}
      </div>
      <div className={styleClasses.content}>
        <ImageSwitcher
          onCLickLeftHandler={slideLeft}
          onClickRightHandler={slideRight}
        />
        <ImageIndices
          index={currIdx}
          jumptToImage={jumptToImage}
        />
      </div>
    </div>
  )
}

export default Carousel
