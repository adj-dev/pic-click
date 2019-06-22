import React from 'react'

// This is the most simple of all the components, literally just renders props from the parent
export default function Header({ score, highScore, message }) {
  return (
    <header>
      <div id="logo">
        <h1>Pic-click</h1>
      </div>
      <div id="message">
        <span>{message}</span>
      </div>
      <div id="scoreboard">
        <span>Current score: </span>
        <span id="currentScore">{score}</span>
        <span> High score: </span>
        <span id="highScore">{highScore}</span>
      </div>
    </header>
  )
}
