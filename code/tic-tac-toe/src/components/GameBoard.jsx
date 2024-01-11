import React, {useState} from "react";

const GameBoard = ({ handlePlayerSwitch, turns}) => {

  //   if(gameboard[x][y]) return;
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
