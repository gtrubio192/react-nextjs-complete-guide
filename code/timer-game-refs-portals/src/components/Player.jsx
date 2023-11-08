import React, {useState} from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState('');

  const handleInput = (e) => {
    setPlayerName(e.target.value);
  }

  return (
    <section id="player">
      <h2>Welcome unknown entity</h2>
      <p>
        <input type="text" onChange={handleInput} value={playerName} />
        <button>Set Name</button>
      </p>
    </section>
  );
}
