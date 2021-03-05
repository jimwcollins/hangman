import React from 'react';
import styled from 'styled-components';
import gallows from '../../images/Gallows.png';

const GallowsImg = styled.img`
  position: absolute;
  top: 0rem;
  right: 0rem;
  height: ${({ gameRunning }) => (gameRunning ? '95rem' : '120rem')};
  transition: height 1s ease;
`;

const Gallows = ({ gameRunning }) => {
  return <GallowsImg src={gallows} gameRunning={gameRunning} />;
};

export default Gallows;
