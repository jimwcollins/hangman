import React from 'react';
import styled from 'styled-components';
import moon from '../../images/Moon.png';

const MoonImg = styled.img`
  position: absolute;
  top: -30rem;
  right: -30rem;
  height: ${({ gameRunning }) => (gameRunning ? '65vh' : '83vh')};
  transition: height 3s ease;
`;

const Moon = ({ gameRunning }) => {
  return <MoonImg src={moon} gameRunning={gameRunning} />;
};

export default Moon;
