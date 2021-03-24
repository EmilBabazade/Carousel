import React from 'react'
import images from '../utils/images'
import { createUseStyles } from 'react-jss'
import colors from '../utils/colors'

const useStyles = createUseStyles({
  indices: {
    flex: '1',
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-evenly',
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
    }
  }
})

const ImageIndices = ({ jumptToImage, index }) => {
  const classes = useStyles()

  const white = {
    color: colors.white
  }

  const indices = images.map((_, idx) => {
    if (idx === index) {
      return (
              <li style={white} key={idx} onClick={evt => jumptToImage(idx)}>
                {idx}
              </li>
      )
    } else {
      return (
                <li key={idx} onClick={evt => jumptToImage(idx)}>
                {idx}
              </li>
      )
    }
  })

  return (
      <ul className={classes.indices}>
          {indices}
      </ul>
  )
}

export default ImageIndices
