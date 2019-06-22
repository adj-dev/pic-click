import React, { useState, useEffect } from 'react'
import Image from './Image'
import imagesArray from '../assets'

export default function Images({ clickHandler }) {
  const [reset, setReset] = useState(false)

  // Reference John's comments for author cred
  const randomizeImages = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const handleClick = clickedTwice => {
    if (clickedTwice) {
      setReset(true)
      return clickHandler(true)
    }
    clickHandler(false)
  }

  let images = randomizeImages(imagesArray)

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
