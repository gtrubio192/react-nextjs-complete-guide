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

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  
  // Deriving gameboard
  let gameBoard = initialGameBoard;
  for(const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player
  }
  // App will re-render after every turn, check winning combos
  for(const combo of WINNING_COMBINATIONS) {
    const firstSquareSymbol = 
    const secondSquareSymbol =
    const thirdSquareSymbol =
  }
   
  const handleSelectSquare = (x, y) => {
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
