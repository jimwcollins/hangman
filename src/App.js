import React from 'react';
import './App.css';
import { Router } from '@reach/router';

import Header from './Components//Header';
import Home from './Components/Home';
import Game from './Components/Game';

const App = () => {
  return (
    <div className="app">
      <Header />

      <Router className="game">
        <Home path="/" />
        <Game path="/game" />
      </Router>
    </div>
  );
};

export default App;
