import { useState } from "react"

import GameBoard from "./components/GameBoard"
import Players from "./components/Players"
import Log from "./components/Log";
import Header from "./components/Header";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  //const [activePlayer, setActivePlayer] = useState('X');
  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    //setActivePlayer((currentPlayer) => currentPlayer === 'X' ? '0' : 'X');

    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <>
    <Header/>
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Players initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Players initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
    </>
  )
}

export default App
