import { useState } from 'react'

import './App.css'
import { Chessboard } from "react-chessboard";
import { findPossibleMoves } from './utils/possibleMoves';
import { Chess } from 'chess.js';

function App() {
  const [position, setPosition] = useState({})

  const handleClick = (sq) => {
    console.log(sq)

    const possible = findPossibleMoves(sq)
    let possibleMoves = {}
    possible.forEach((p) => {
      possibleMoves = { ...possibleMoves, [p]: 'bN' }
    })
    setPosition({ ...possibleMoves, [sq]: 'wN' })
  }

  return (
    <div className="App">
      <Chessboard
        boardWidth={560}
        position={{ ...position }}
        onSquareClick={handleClick}
      />
    </div>
  )
}

export default App
