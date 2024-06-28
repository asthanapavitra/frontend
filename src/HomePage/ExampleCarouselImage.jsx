import React from 'react'

function ExampleCarouselImage(props) {
  return (
    <div >
       <img className='d-block w-100 carouselImage'  src={props.src}></img>
    </div>
  )
}

export default ExampleCarouselImage;
