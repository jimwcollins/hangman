import React from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';
import logo from '../../images/Logo_White.png';

const MainLogo = styled.img`
  grid-area: header;
  justify-self: center;
  height: ${({ gameRunning }) => (!gameRunning ? '35rem' : '15rem')};
  padding: 5rem 3rem 3rem 3rem;
  cursor: pointer;
  transition: height 1s;
`;

const Logo = ({ gameRunning, setGameRunning }) => {
  const backToHome = () => {
    setGameRunning(false);
    navigate('/');
  };

  return <MainLogo src={logo} gameRunning={gameRunning} onClick={backToHome} />;
};

export default Logo;
