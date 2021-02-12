import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Hangman from './Hangman';
import Welcome from './Welcome';

const Home = ({ canvasSize }) => {
  const [drawStage, setDrawStage] = useState(0);

  // Complete animation for home page
  // Triggers hangman draw roughly once every second until complete
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (drawStage < 10) setDrawStage((prevStage) => prevStage + 1);
    }, 1100);

    return () => {
      clearTimeout(timeout);
    };
  }, [drawStage]);

  return (
    <>
      <Hangman drawTo={drawStage} canvasSize={canvasSize} />
      <div className="control">
        <Welcome />
      </div>
    </>
  );
};

export default Home;
