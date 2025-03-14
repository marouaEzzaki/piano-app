import React, { useState } from 'react';
import '../styles/PianoKey.css';

function PianoKey({ note, type, gridColumn, onPlay }) {
  const [isActive, setIsActive] = useState(false);

  const handleMouseDown = () => {
    setIsActive(true);
    if (onPlay) onPlay(note);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  const handleMouseUp = () => {
    setIsActive(false);
  };

  return (
    <div
      className={`pianoKey ${type} ${isActive ? 'active' : ''}`}
      style={{ gridColumn }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <div className="pianoKeyNote">{note}</div>
    </div>
  );
}

export default PianoKey;