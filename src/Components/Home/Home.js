import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import { Transition } from 'react-transition-group';

import { HomeDiv, Welcome, WelcomeText, WelcomeButton } from './Home-styles';

const Home = ({ canvasSize, setGameRunning }) => {
  const [drawStage, setDrawStage] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);

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

  const startGame = () => {
    setShowWelcome(false);

    setTimeout(() => {
      setGameRunning(true);
    }, 1000);

    setTimeout(() => {
      navigate('/game');
    }, 1000);
  };

  return (
    <Transition in={showWelcome} timeout={1000} appear={true}>
      {(state) => (
        <HomeDiv>
          <Welcome>
            <WelcomeText state={state}>Want to play a game?</WelcomeText>
            <WelcomeButton
              text="Hell, yeah!"
              state={state}
              onClick={() => startGame()}
            />
          </Welcome>
        </HomeDiv>
      )}
    </Transition>
  );
};

export default Home;
