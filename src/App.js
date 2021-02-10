import React, { useState } from 'react';
import './App.css';
import { Router } from '@reach/router';

import Header from './Components//Header';
import Home from './Components/Home';
import Game from './Components/Game';

const App = () => {
  const [canvasSize] = useState({ width: 400, height: 410 });

  return (
    <div className="app">
      <Header />

      <Router className="game">
        <Home path="/" canvasSize={canvasSize} />
        <Game path="/game" canvasSize={canvasSize} />
      </Router>
    </div>
  );
};

export default App;
