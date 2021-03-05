import React from 'react';
import styled from 'styled-components';
import gallows from '../../images/Gallows.png';

const GallowsImg = styled.img`
  position: absolute;
  top: 0rem;
  right: ${({ gameRunning }) => (gameRunning ? '-5rem' : '0rem')};
  height: ${({ gameRunning }) => (gameRunning ? '90rem' : '120rem')};
  transition: all 1s ease;
`;

const Gallows = ({ gameRunning }) => {
  return <GallowsImg src={gallows} gameRunning={gameRunning} />;
};

export default Gallows;
