import React from 'react'

const Carousel = ({src}) => (
    <div>
        <button>Previouse</button>
        <img src={src}/>
        <button>Next</button>
    </div>
)

export default Carousel