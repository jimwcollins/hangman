import React, { useState } from 'react';
import { Router } from '@reach/router';
import styled from 'styled-components';
import './App.css';

import Logo from './Components/ImageComps/Logo';
import Moon from './Components/ImageComps/Moon';
import Gallows from './Components/ImageComps/Gallows';
import Graves from './Components/ImageComps/Graves';
import Home from './Components/Home/Home';
import Game from './Components/Game/Game';

// Styles
const AppContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns:
    minmax(10rem, 1fr)
    minmax(min-content, 114rem)
    minmax(10rem, 1fr);
  grid-template-rows: min-content 1fr;
  grid-template-areas: '. header .' '. app .';
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: var(--color-black);
  overflow: hidden;
`;

const GameRouter = styled(Router)`
  grid-area: app;
  height: 93%;
  width: 100%;
`;

// Component
const App = () => {
  const [canvasSize] = useState({ width: 400, height: 410 });
  const [gameRunning, setGameRunning] = useState(false);

  return (
    <AppContainer>
      <Logo gameRunning={gameRunning} setGameRunning={setGameRunning} />
      <Moon gameRunning={gameRunning} />
      <Gallows gameRunning={gameRunning} />
      <Graves />

      <GameRouter>
        <Home
          path="/"
          canvasSize={canvasSize}
          setGameRunning={setGameRunning}
        />
        <Game path="/game" canvasSize={canvasSize} />
      </GameRouter>
    </AppContainer>
  );
};

export default App;
