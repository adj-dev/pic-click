# Pic-Click

A simple memory game built with React.

## How to Play

Pic-Click provides 12 photos of abstract art in random order. Once the player clicks on a square the order of the photos is instantly randomized. The goal of the game is to click on each photo once, without clicking on any one photo more than one time. 

## State Management

During development I initially managed component state in class components, yet I ultimately migrated to managing state with hooks in functional components. This significantly lessened the number of lines required to write the same components, and allowed for much cleaner code (of which I am an avid fan). Also, because functional components are less expensive (computationally) than class components there is also an added boost in performance - although it is unnoticeable in such a small application. 


