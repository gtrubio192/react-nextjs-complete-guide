import React from "react";

const GameOver = ({ winner, onReset }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>Its a draw!</p>}
      <p>
        <button onClick={onReset}>Rematch!</button>
      </p>
    </div>
  );
};

export default GameOver;
