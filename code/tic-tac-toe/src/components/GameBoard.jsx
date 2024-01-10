import React, {useState} from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const GameBoard = ({ handlePlayerSwitch}) => {
  // const [gameboard, setGameBoard] = useState(initialGameBoard);
  // const handleSelectedSquare = (x,y,) => {
  //   if(gameboard[x][y]) return;
  //   // Update state in *immutable way* by copying value of prev state
  //   setGameBoard(prev => {
  //     const updatedBoard = [...prev.map(innerArray => [...innerArray])];
  //     updatedBoard[x][y] = symbol;
  //     return updatedBoard;
  //   });
  //   handlePlayerSwitch()
  // }
  
  return (
    <ol id="game-board">
      {gameboard.map((row, x) => (
        <li key={x}>
          <ol>
            {row.map((symbol, y) => (
              <li key={y}>
                <button onClick={() => handlePlayerSwitch(x,y)}>{symbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
