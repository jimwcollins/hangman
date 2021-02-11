import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import styled from 'styled-components';
import { navigate } from '@reach/router';

import MainButton from './MainButton';

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
`;

const WelcomeText = styled.h2`
  text-align: center;
  font-family: var(--font-display);
  font-size: 5rem;
  color: var(--color-text);
  margin-bottom: 3rem;
  opacity: ${(props) => (props.state === 'entered' ? 1 : 0)};
  transform: ${(props) =>
    props.state === 'entered' ? 'translateY(0rem)' : 'translateY(-3rem)'};
  transition: all 1s;
`;

const WelcomeButton = styled(MainButton)`
  opacity: ${(props) => (props.state === 'entered' ? 1 : 0)};
  transform: ${(props) =>
    props.state === 'entered' ? 'translateY(0rem)' : 'translateY(3rem)'};
  transition: all 1s;
`;

export default function Welcome() {
  const [showWelcome, setShowWelcome] = useState(true);

  const startGame = () => {
    setShowWelcome(false);

    setTimeout(() => {
      navigate('/game');
    }, 1000);
  };

  return (
    <WelcomeContainer>
      <Transition in={showWelcome} timeout={1000} appear={true}>
        {(state) => (
          <WelcomeText state={state}>Want to play a game?</WelcomeText>
        )}
      </Transition>
      <Transition in={showWelcome} timeout={1000} appear={true}>
        {(state) => (
          <WelcomeButton
            text="Hell, yeah!"
            state={state}
            onClick={() => startGame()}
          />
        )}
      </Transition>
    </WelcomeContainer>
  );
}
