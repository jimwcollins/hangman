import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../breakpoints';
import gallows from '../../images/Gallows.png';

const GallowsImg = styled.img`
  position: absolute;
  top: -2rem;
  right: -5rem;
  height: ${({ gameRunning }) => (gameRunning ? '95rem' : '115rem')};
  transition: all 1s ease;

  @media ${breakpoints.deskSml.width} {
    display: none;
  }

  @media ${breakpoints.deskMed.width} {
    height: ${({ gameRunning }) => (gameRunning ? '80rem' : '100rem')};
  }

  @media ${breakpoints.deskLg.width} {
    height: ${({ gameRunning }) => (gameRunning ? '130rem' : '150rem')};
  }
`;

const Gallows = ({ gameRunning }) => {
  return <GallowsImg src={gallows} gameRunning={gameRunning} />;
};

export default Gallows;
