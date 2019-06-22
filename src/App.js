import React, { useState } from 'react'
import Header from './components/Header'
import Images from './components/Images'

/*
This is what I consider to be the top level component so I'll write here about how I handled state 
throughout this application. As you can see, I chose to use hooks in functional components vs. class
components. This is due to multiple factors: 
  1)  Hooks have been shown to improve performance by reducing the overall package size,
      although I admit that it won't make too much of a difference in a small application 
      such as this one.
  2)  Functional components with hooks allow the same component to be written with cleaner 
      and more concise code.
  3)  I have built small React apps with class components before, and so I was interested in 
      using a technology with which I had no prior experience.
*/

export default function App() {
  const [score, setScore] = useState(0)
  const [highScore, sethighScore] = useState(0)
  const [message, setMessage] = useState('');

  // Handles the click event which is trigger by the `Image` component 
  // and passed through the `Images` component
  const handleClick = clickedTwice => {
    // Resets the score if image has been clicked twice
    if (clickedTwice) {
      setScore(0)
      return setMessage('Incorrect!')
    }
    // Otherwise, increment the score (and high score if appropriate)
    // and set the game message
    setScore(score + 1)
    sethighScore(score >= highScore ? highScore + 1 : highScore)
    setMessage('Correct')
  }

  // Utilized a JSX fragment (<></>)to compensate React's parsing requirements
  return (
    <>
      <Header score={score} highScore={highScore} message={message} />
      <Images clickHandler={handleClick} />
    </>
  )
}
