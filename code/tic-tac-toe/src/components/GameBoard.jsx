import React, {useState} from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const GameBoard = ({ handlePlayerSwitch, turns}) => {

  //   if(gameboard[x][y]) return;

  // Deriving state from props
  let gameBoard = initialGameBoard;
  for(const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, x) => (
        <li key={x}>
          <ol>
            {row.map((symbol, y) => (
              <li key={y}>
                <button 
                disabled={symbol !== null}
                onClick={() => handlePlayerSwitch(x,y)}>{symbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
