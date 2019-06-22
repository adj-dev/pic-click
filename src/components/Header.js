import React from 'react'

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
