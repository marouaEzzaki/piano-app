import React from 'react';
import '../styles/Piano.css';
import PianoKey from './PianoKey';
import keyNotes from '../assets/keyNotes';
import useSound from 'use-sound';
import pianoSound from '../assets/piano.mp3';

function Piano({ onNotePlayed }) {
  
  const sprites = keyNotes.reduce((acc, key) => {
    acc[key.note] = [key.start, key.duration];
    return acc;
  }, {});

  const [play] = useSound(pianoSound, { sprite: sprites });

  const playNote = (nota) => {
    if (nota) {
      play({ id: nota });
      if (onNotePlayed) {
        onNotePlayed(nota); 
      }
    }
  };

  return (
    <div className="piano">
      {keyNotes.map((key) => (
        <PianoKey
          key={key.note}
          note={key.note}
          type={key.type}
          gridColumn={key.gridColumn}
          onPlay={playNote}
        />
      ))}
    </div>
  );
}

export default Piano;