import React from 'react';
import styled from 'styled-components';
import gallows from '../../images/Gallows.png';

const GallowsImg = styled.img`
  position: absolute;
  top: -2rem;
  right: ${({ gameRunning }) => (gameRunning ? '-5rem' : '-5rem')};
  height: ${({ gameRunning }) => (gameRunning ? '85vh' : '110vh')};
  transition: all 1s ease;
`;

const Gallows = ({ gameRunning }) => {
  return <GallowsImg src={gallows} gameRunning={gameRunning} />;
};

export default Gallows;
