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

  const mouseDown = (e) => setSwiping(false)
  const mouseMove = (e) => {
    setMovementX(e.movementX)
    setSwiping(true)
  }
  const mouseUp = (e) => {
    if (isSwiping) {
      console.log(`mouse moved ${movementX}`)
      if (movementX < 0) {
        slideRight()
      } else if (movementX > 0) {
        slideLeft(2)
      }
      setSwiping(false)
    } else { console.log('not dragging') }
  }

  const slides = images.map((i, k) => <Slide src={i} key={k}/>)

  return (
    <div
        onMouseDown={mouseDown}
        onMouseUp={mouseUp}
        onMouseMove={mouseMove}
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
