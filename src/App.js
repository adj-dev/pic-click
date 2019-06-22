import React, { useState } from 'react'
import Header from './components/Header'
import Images from './components/Images'

export default function App() {
  const [score, setScore] = useState(0)
  const [highScore, sethighScore] = useState(0)
  const [message, setMessage] = useState('');

  const handleClick = clickedTwice => {
    if (clickedTwice) {
      setScore(0)
      return setMessage('Incorrect!')
    }

    let newHighScore = highScore + 1;

    sethighScore(score >= highScore ? newHighScore : highScore)
    setScore(score + 1)
    setMessage('Correct')
  }

  return (
    <>
      <Header score={score} highScore={highScore} message={message} />
      <Images clickHandler={handleClick} />
    </>
  )
}
