import React, { useState, useEffect } from 'react';

import Hangman from './Hangman';
import { Link } from '@reach/router';

const Home = ({ canvasSize }) => {
  const [drawStage, setDrawStage] = useState(0);

  // Complete animation for home page
  // Triggers hangman draw roughly once every second until complete
  useEffect(() => {
    setTimeout(() => {
      if (drawStage < 10) setDrawStage((prevStage) => prevStage + 1);
    }, 1100);
  }, [drawStage]);

  return (
    <>
      <Hangman drawTo={drawStage} canvasSize={canvasSize} className="hangman" />
      <div className="control">
        <div className="new-game">
          <h2>Want to play a game?</h2>
          <button className="btn">
            <Link to="/game">New Game</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
