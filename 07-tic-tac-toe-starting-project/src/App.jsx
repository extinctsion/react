import { useState } from "react"

import GameBoard from "./components/GameBoard"
import Players from "./components/Players"

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(){
    setActivePlayer((currentPlayer) => currentPlayer === 'X' ? '0' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Players initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Players initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      log
    </main>
  )
}

export default App
