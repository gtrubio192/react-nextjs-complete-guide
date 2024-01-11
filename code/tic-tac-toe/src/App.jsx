import React, { useState } from "react";
import GameBoard from "./components/GameBoard";

import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns[0]?.player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}
function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  for(const combo of WINNING_COMBINATIONS) {
    
  }
   
  const handleSelectSquare = (x, y) => {
    // setActivePlayer((currPlayer) => (currPlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      // prefer *computed values*
      // Dont know if activePlayer is updated yet
      let currentPlayer = deriveActivePlayer(prevTurns);
      // Immutable state
      const updatedTurns = [
        { square: { row: x, col: y }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        PLAYERS
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" activePlayer={activePlayer} />
          <Player name="Player 2" symbol="O" activePlayer={activePlayer} />
        </ol>
        <GameBoard
          turns={gameTurns}
          handlePlayerSwitch={handleSelectSquare}
        />
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
