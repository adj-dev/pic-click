import React, { useState, useEffect } from 'react'

export default function Image({ src, id, onClick, reset }) {
  const [clicked, setClicked] = useState(false)
  const style = {
    backgroundImage: `url(${src})`
  }

  const handleClick = () => {
    setClicked(clicked ? false : true)
    onClick(clicked)
  }

  useEffect(() => {
    if (reset) {
      setClicked(false)
    }
  }, [reset])

  return <div style={style} className="image-div" id={id} onClick={handleClick}></div>
}
