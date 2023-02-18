import { useState } from 'react'

import './App.css'
import { Chessboard } from "react-chessboard";
import { findPossibleMoves } from './utils/possibleMoves';

function App() {
  const [board, setBoard] = useState({ d4: 'wN' })

  const handleClick = (sourceSq, sq, piece) => {
    console.log(sq)

    const possible = findPossibleMoves(sq)
    let possibleMoves = {}
    possible.forEach((p) => {
      possibleMoves = { ...possibleMoves, [p]: 'bN' }
    })
    setBoard({ ...possibleMoves, [sq]: 'wN' })
  }

  return (
    <div className="App">
      <h2>
        Drag the White Knight
      </h2>
      <Chessboard
        boardWidth={560}
        position={{ ...board }}
        onPieceDrop={handleClick}
      />
      <div>
        <b>
          Dark Knight -
        </b>
        Possible
        Move
      </div>
      <div>
        <b>
          White Knigh Knight -
        </b>
        Current Knight Position
      </div>
    </div>
  )
}

export default App
