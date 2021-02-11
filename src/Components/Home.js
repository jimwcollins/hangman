import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Hangman from './Hangman';
import Welcome from './Welcome';
import MainButton from './MainButton';

const NewGame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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
      <Hangman drawTo={drawStage} canvasSize={canvasSize} />
      <div className="control">
        <NewGame>
          <Welcome>Want to play a game?</Welcome>
          <MainButton target="/game" text="Hell, yeah!" />
        </NewGame>
      </div>
    </>
  );
};

export default Home;
