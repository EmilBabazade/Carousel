/* eslint-disable no-unused-vars */
import React from 'react'
import Carousel from './components/Carousel'
import images from './utils/images'
import { createUseStyles } from 'react-jss'

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
// Carousel works with any kind of content, but it is not responsible for styling any kind of content,
// (other than centering the content)
  const styles = useStyles()

  const slides = images.map((i, k) => <img src={i} key={k}/>)
  const headers = [
        <h1 key={1}>I am walking here</h1>,
        <h2 key={2}>I am walking here</h2>,
        <h3 key={3}>I am walking here</h3>,
        <h4 key={4}>I am walking here</h4>,
        <h5 key={5}>I am walking here</h5>,
        <h6 key={6}>I am walking here</h6>
  ]
  const mix = [
    ...images.map((i, k) => <img src={i} key={k}/>),
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
              {/* <Carousel slides={slides} /> */}
              {/* <Carousel slides={headers} />, */}
              <Carousel slides={mix} />
        </>
  )
}

export default App
