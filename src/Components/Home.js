import React, { useState, useEffect } from 'react';

import Hangman from './Hangman';
import Welcome from './Welcome';
import MainButton from './MainButton';

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
          <Welcome>Want to play a game?</Welcome>
          <MainButton target="/game">Hell, yeah!</MainButton>
        </div>
      </div>
    </>
  );
};

export default Home;
