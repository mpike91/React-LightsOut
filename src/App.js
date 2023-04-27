import { useState } from 'react';
import GameBox from './GameBox.js';
import StartButton from './StartButton.js';
import './App.css';
import React from 'react';

function App() {

  return (
    <div className="App">
      <GameBox x={4} y={4} />
    </div>
  );
}

export default App;