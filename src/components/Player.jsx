import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // Best practice: Updating state based on old state - always use a function
    // just setIsEditing(!isEditing) is not enough because react just schedules a state update to true
    setIsEditing((editing) => !editing);
  }

  let playerName = <span className="player-name">{name}</span>;
  // let btnCaption = 'Edit';

  if (isEditing) {
    playerName = <input type="text" required value={name} />;
    // btnCaption = 'Save';
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
