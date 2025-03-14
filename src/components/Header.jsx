import React from 'react'
import '../styles/Header.css'

function Header({ pianoTitle }) { 
  return (
    <header className="header">
      {pianoTitle}
    </header>
  );
}

export default Header;
