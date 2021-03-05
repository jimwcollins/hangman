import React, { useState } from 'react';
import { navigate } from '@reach/router';
import { Transition } from 'react-transition-group';

import { HomeDiv, Welcome, WelcomeText, WelcomeButton } from './Home-styles';

const Home = ({ setGameRunning }) => {
  const [showWelcome, setShowWelcome] = useState(true);

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
              text="Begin"
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
