import React from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';
import { breakpoints } from '../../breakpoints';
import logo from '../../images/Logo.png';

const MainLogo = styled.img`
  grid-area: header;
  justify-self: center;
  height: ${({ gameRunning }) => (!gameRunning ? '35rem' : '15rem')};
  padding: 5rem 3rem 3rem 3rem;
  cursor: pointer;
  transition: height 1s;

  @media ${breakpoints.tabletSm.width} {
    height: ${({ gameRunning }) => (!gameRunning ? '20rem' : '10rem')};
    padding: 2rem 0;
  }

  @media ${breakpoints.phoneLand.height} {
    display: none;
  }
`;

const Logo = ({ gameRunning, setGameRunning }) => {
  const backToHome = () => {
    setGameRunning(false);
    navigate('/');
  };

  return <MainLogo src={logo} gameRunning={gameRunning} onClick={backToHome} />;
};

export default Logo;
