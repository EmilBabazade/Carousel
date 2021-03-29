import React from 'react'
import leftArrow from '../left-arrow.png'
import rightArrow from '../next.png'
import { createUseStyles } from 'react-jss'

const ImageSwitcher = ({
  onCLickLeftHandler, onClickRightHandler
}) => {
  const useStyles = createUseStyles({
    imageSwitcher: {
      flex: '8',
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'space-between',
      '& img': {
        width: '20%'
      },
      '& button': {
        backgroundColor: 'transparent',
        border: '0px',
        width: '20%',
        '& img': {
          transition: 'all 0.5s cubic-bezier(0.6, -0.28, 0.735, 0.045)'
        }
      },
      '& button:hover': {
        cursor: 'pointer',
        '& img': {
          width: '30%'
        }
      }
    }
  })
  const classes = useStyles()

  return (
    <div className={classes.imageSwitcher}>
        <button className="left" onClick={onCLickLeftHandler}>
          <img src={leftArrow} />
        </button>
        <button className="right" onClick={onClickRightHandler}>
          <img src={rightArrow} />
        </button>
    </div>
  )
}

export default ImageSwitcher
