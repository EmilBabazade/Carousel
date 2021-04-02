import React from 'react'
import { createUseStyles } from 'react-jss'
import colors from '../utils/colors'

const ImageIndices = ({ jumptToSlide, index, slideCount }) => {
  const useStyles = createUseStyles({
    indices: {
      flex: '1',
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'space-evenly',
      margin: 0,
      '& li': {
        fontFamily: 'Syne Mono', // fonts are imported in index.html
        color: colors.gray,
        listStyle: 'none',
        position: 'relative',
        transition: 'all 0.25s cubic-bezier(0.6, -0.28, 0.735, 0.045)',
        fontSize: '30px',
        bottom: '0px'
      },
      '& li:hover': {
        cursor: 'pointer',
        bottom: '20%',
        color: colors.purple
      },
      '& li:focus': {
        textDecoration: 'none',
        backgroundColor: 'none'
      },
      '& li::selection': {
        background: 'transparent'
      }
    }
  })
  const classes = useStyles()

  const white = {
    color: colors.black
  }

  const indices = []
  for (let idx = 0; idx < slideCount; idx++) {
    if (idx === index) {
      indices.push(
              <li style={white} key={idx} onClick={evt => jumptToSlide(idx)}>
                {idx + 1}
              </li>
      )
    } else {
      indices.push(
                <li key={idx} onClick={evt => jumptToSlide(idx)}>
                {idx + 1}
              </li>
      )
    }
  }

  return (
      <ul className={classes.indices}>
          {indices}
      </ul>
  )
}

export default ImageIndices
