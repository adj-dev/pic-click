import React, { useState, useEffect } from 'react'
import Image from './Image'
import imagesArray from '../assets'

export default function Images({ clickHandler }) {
  /*
  The idea behind `reset` was initially inspired by a desire to avoid using an
  array to hold individual state for each instance of the child component. 
  Alternatively, reset is a Boolean that is initially set to `false` and 
  passed down to each instance of the child component. As soon as one child 
  component is clicked more than once the value of `reset` is changed to 
  `true`: this triggers a function in each instance of the child component to 
  reset the value of `clicked` to `false`. Using this method, all components 
  are able to hold "local" state while also maintaining the ability to reset 
  simutaneously based on a click event from only one of the instances.

  All of this for slighly cleaner code ;)
  */
  const [reset, setReset] = useState(false)

  // Borrowed from the Fisher-Yates shuffle algorithm
  // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
  const randomizeImages = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Handles the click event triggered by the `Image` component (a direct child)
  const handleClick = clickedTwice => {
    // If the image has been clicked more than once `reset` is set to `true`
    // and the parent's click handler is called with `true`
    if (clickedTwice) {
      setReset(true)
      return clickHandler(true)
    }
    // Otherwise, simply call the parent's click handler with `false`
    clickHandler(false)
  }

  // Randomizes the order of the images array every time the component re-renders 
  let images = randomizeImages(imagesArray)

  // Returns the value of `reset` to `false` after the value of `reset` changes, 
  // but interestingly not before sending a value of `true` to the child component
  useEffect(() => {
    if (reset) setReset(false)
  }, [reset])

  return (
    <div className="container">
      {images.map(image => (
        <Image src={image.src} id={image.id} onClick={handleClick} key={image.id} reset={reset} />
      ))}
    </div>
  )
}
