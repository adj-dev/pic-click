import React, { useState, useEffect } from 'react'

export default function Image({ src, id, onClick, reset }) {
  const [clicked, setClicked] = useState(false)
  const style = {
    backgroundImage: `url(${src})`
  }

  // Handles the click event triggers in this very component 
  // (technically in one of the twelve instances of this component)
  const handleClick = () => {
    setClicked(clicked ? false : true)
    // Calls the parent's click handler with the value of `clicked`. Notice that
    // this won't be fired when the component intially renders and so our initial
    // state of `clicked = false` doesn't affect this function call. 
    onClick(clicked)
  }

  // If the `onClick()` method above gets called with `false` then the parent component
  // will send us `reset = true`. This is the app telling every instance of the `Image`
  // component to reset the value of `clicked` to false
  useEffect(() => {
    if (reset) {
      setClicked(false)
    }
  }, [reset])

  return <div style={style} className="image-div" id={id} onClick={handleClick}></div>
}
