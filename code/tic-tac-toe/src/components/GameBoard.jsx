import React, {useState} from "react";

const GameBoard = ({ handlePlayerSwitch, board}) => {

  return (
    <ol id="game-board">
      {board.map((row, x) => (
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
