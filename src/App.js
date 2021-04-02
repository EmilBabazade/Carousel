/* eslint-disable no-unused-vars */
import React from 'react'
import Carousel from './components/Carousel'
import images from './utils/images'
import { createUseStyles } from 'react-jss'
// TODO:put these in the Carousel component.
import './utils/css_defaults.css'

// Carousel should work with any kind of content, but it is not responsible for styling any kind of content,
// (other than centering the content)
const useStyles = createUseStyles({
  center: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  beeMovie: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& h1': {
      flex: '1'
    },
    '& p': {
      flex: '1',
      padding: '0 20%'
    }
  }
})

const App = () => {
  const styles = useStyles()

  //   bunch of cool images
  const slides = images.map((i, k) => <img src={i} key={k}/>)

  //   and some spans and stuff
  const mix = [
    ...slides,
            <span key={8} className={styles.center}>I am a span!</span>,
        <div key={10} className={styles.beeMovie}>
              <h1>
                  Bee Movie
              </h1>
              <p>
              Bee Movie is a 2007 American computer-animated comedy film
               produced by DreamWorks Animation and distributed by Paramount
                Pictures. Directed by Simon J. Smith and Steve Hickner,
                 the film stars the voices of Jerry Seinfeld, Renée Zellweger,
                  Matthew Broderick, John Goodman, Patrick Warburton, and Chris Rock
                   in supporting roles. The story follows Barry B. Benson,
                    a honey bee who sues the human race for exploiting bees,
                     after learning from his florist friend Vanessa Bloome that
                      humans sell and consume honey.
              </p>
        </div>,
      <h1 key={11} className={styles.center}>I am walking here</h1>,
      <h2 key={12} className={styles.center}>I am walking here</h2>
  ]

  return (
        <>
              <Carousel slides={mix} />
        </>
  )
}

export default App
