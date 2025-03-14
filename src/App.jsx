import React, { useState } from 'react';
import Header from './components/Header';
import RecentNote from './components/RecentNote';
import Piano from './components/Piano';

export default function App() {
  const [recentNote, setRecentNote] = useState([]);

  const handleNotePlayed= (note) => {
    setRecentNote((played) => [...played, note].slice(-2)); 
  };

  return (
    <div className="container">
      <Header pianoTitle={<h1>piano app</h1>} />
      <RecentNote recentNote={recentNote} />
      <Piano onNotePlayed={handleNotePlayed} />
    </div>
  );
}