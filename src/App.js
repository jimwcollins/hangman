import React, { useState } from 'react';
import { Router } from '@reach/router';
import styled from 'styled-components';

import './App.css';
import Header from './Components//Header';
import Home from './Components/Home';
import Game from './Components/Game';
import Wallpaper from '../src/images/Dark_Black_Wallpaper.jpeg';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns:
    minmax(10rem, 1fr)
    minmax(min-content, 114rem)
    minmax(10rem, 1fr);
  grid-template-rows: min-content 55rem;
  grid-template-areas: '. header .' '. app .';
  align-items: center;
  height: 100vh;
  width: 100%;
  padding-top: 5rem;
  background-image: url(${Wallpaper});
  background-size: cover;
`;

const App = () => {
  const [canvasSize] = useState({ width: 400, height: 410 });

  return (
    <AppContainer>
      <Header />

      <Router className="game">
        <Home path="/" canvasSize={canvasSize} />
        <Game path="/game" canvasSize={canvasSize} />
      </Router>
    </AppContainer>
  );
};

export default App;
