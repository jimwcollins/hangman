import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../breakpoints';
import moon from '../../images/Moon.png';

const MoonImg = styled.img`
  position: absolute;
  top: -30rem;
  right: -30rem;
  height: ${({ gameRunning }) => (gameRunning ? '67rem' : '82rem')};
  transition: height 3s ease;

  @media ${breakpoints.deskSml.width} {
    display: none;
  }

  @media ${breakpoints.deskMed.width} {
    height: ${({ gameRunning }) => (gameRunning ? '65rem' : '80rem')};
  }

  @media ${breakpoints.deskLg.width} {
    height: ${({ gameRunning }) => (gameRunning ? '90rem' : '113rem')};
  }
`;

const Moon = ({ gameRunning }) => {
  return <MoonImg src={moon} gameRunning={gameRunning} />;
};

export default Moon;
