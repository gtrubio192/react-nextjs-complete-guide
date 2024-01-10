import React, { useState } from "react";
import GameBoard from "./components/GameBoard";

import Player from "./components/Player";
import Log from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  const handleSelectSquare = (x, y) => {
    setActivePlayer((currPlayer) => (currPlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      // AVOID derived states, prefer *computed values*
      // Dont know if activePlayer is updated yet
      let currentPlayer = "X";
      if (prevTurns[0]?.player === "X") {
        currentPlayer = "O";
      }
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
          symbol={activePlayer}
          handlePlayerSwitch={handleSelectSquare}
        />
      </div>
      <Log />
    </main>
  );
}

export default App;
