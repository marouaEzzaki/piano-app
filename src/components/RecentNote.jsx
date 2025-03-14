import React from 'react';
import '../styles/RecentNote.css';

const RecentNote = ({ recentNote }) => {

  const [currentNote = '-', previousNote = '-'] = Array.isArray(recentNote)
  ? recentNote.slice(-2).reverse()
  : [];


  return (
    <div className="note-display">
      <div className="played-note"> 
        {previousNote}
      </div>
      <div className="actual-note"> 
        {currentNote}
      </div>
    </div>
  );
}  

export default RecentNote;
