import React, { useState } from "react";

const Player = ({ name, symbol, activePlayer,onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);
  const handleEdit = () => {
    setIsEditing((prev) => {
      return !prev;
    });

    if (isEditing) {
      onChangeName(symbol, updatedName);
    }
  };

  return (
    <li className={activePlayer === symbol ? 'active' : ''}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={updatedName}
            required
            onChange={(e) => setUpdatedName(e.target.value)}
          />
        ) : (
          <span className="player-name">{updatedName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
