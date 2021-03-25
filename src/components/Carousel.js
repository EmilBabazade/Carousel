import React, { useState } from 'react'
import ImageSwitcher from './ImageSwitcher'
// import ImageIndices from './ImageIndices'
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
  const styleClasses = useStyles({
    imgCount: images.length, slideWidth: 100, index: currIdx
  })

  const onClickLeft = (evt) => {
    evt.preventDefault()
    if (currIdx === 0) {
      setCurrIdx(images.length - 1)
    } else {
      setCurrIdx(currIdx - 1)
    }
  }

  const onClickRight = (evt) => {
    evt.preventDefault()
    if (currIdx === images.length - 1) {
      setCurrIdx(0)
    } else {
      setCurrIdx(currIdx + 1)
    }
  }

  const slides = images.map((i, k) => <Slide src={i} key={k}/>)

  return (
    <div className={styleClasses.wrapper}>
      <div className={styleClasses.slider}>
        {slides}
      </div>
      <div className={styleClasses.content}>
        <ImageSwitcher
          onCLickLeftHandler={onClickLeft}
          onClickRightHandler={onClickRight}
        />
      </div>
    </div>
  )
}

export default Carousel
