import React, { useState } from 'react';
import { Router } from '@reach/router';
import styled from 'styled-components';

import './App.css';
import Header from './Components//Header';
import Home from './Components/Home/Home';
import Game from './Components/Game/Game';
import Wallpaper from '../src/images/Dark_Black_Wallpaper.jpeg';

// Styles
const AppContainer = styled.div`
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
  padding-top: 5rem;
  background-image: url(${Wallpaper});
  background-size: cover;
`;

const GameRouter = styled(Router)`
  grid-area: app;

  display: grid;
  height: 100%;
  grid-template-rows: 60% 40%;
  grid-template-areas: 'game' 'control';
  column-gap: 5rem;
  justify-items: center;
`;

// Component
const App = () => {
  const [canvasSize] = useState({ width: 400, height: 410 });

  return (
    <AppContainer>
      <Header />

      <GameRouter>
        <Home path="/" canvasSize={canvasSize} />
        <Game path="/game" canvasSize={canvasSize} />
      </GameRouter>
    </AppContainer>
  );
};

export default App;
