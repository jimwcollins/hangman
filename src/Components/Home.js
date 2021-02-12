import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

import Hangman from './Hangman';
import MainButton from './MainButton';

const Welcome = styled.div`
  grid-area: control;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 9rem;
`;

const HomeHangman = styled(Hangman)`
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  transition: opacity 1s;
`;

const WelcomeText = styled.h2`
  text-align: center;
  font-family: var(--font-display);
  font-size: 5.5rem;
  color: var(--color-text);
  letter-spacing: 0.2rem;
  margin-bottom: 4rem;
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  transform: ${({ state }) =>
    state === 'entered' ? 'translateY(0rem)' : 'translateY(-3rem)'};
  transition: all 1s;
`;

const WelcomeButton = styled(MainButton)`
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  transform: ${({ state }) =>
    state === 'entered' ? 'translateY(0rem)' : 'translateY(3rem)'};
  transition: all 1s;
`;

const Home = ({ canvasSize }) => {
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
      navigate('/game');
    }, 1000);
  };

  return (
    <Transition in={showWelcome} timeout={1000} appear={true}>
      {(state) => (
        <>
          <HomeHangman
            drawTo={drawStage}
            canvasSize={canvasSize}
            state={state}
          />
          <Welcome>
            <WelcomeText state={state}>Want to play a game?</WelcomeText>
            <WelcomeButton
              text="Hell, yeah!"
              state={state}
              onClick={() => startGame()}
            />
            )}
          </Welcome>
        </>
      )}
    </Transition>
  );
};

export default Home;
