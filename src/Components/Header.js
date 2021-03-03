import React from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  grid-area: header;
  padding: 4rem 0;
`;

const Title = styled.h1`
  text-align: center;
  font-family: var(--font-display);
  color: var(--color-main);
  text-transform: uppercase;
  font-size: ${({ gameRunning }) => (gameRunning ? '4rem' : '7rem')};
  letter-spacing: 1rem;
  margin: 1rem;
  cursor: var(--btn-cursor);
  transition: font-size 1s;
`;

const Cap = styled.span`
  position: relative;
  font-size: 150%;
  top: 1rem;
`;

const Plus = styled.span`
  position: relative;
  font-size: 150%;
  top: 0.7rem;
`;

const Header = ({ gameRunning, setGameRunning }) => {
  const backToHome = () => {
    setGameRunning(false);
    navigate('/');
  };

  return (
    <HeaderContainer>
      <Title gameRunning={gameRunning} onClick={backToHome}>
        <Cap>S</Cap>ticks
        <Plus> + </Plus>
        <Cap>S</Cap>tones
      </Title>
    </HeaderContainer>
  );
};

export default Header;
