import React from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  grid-area: header;
  padding: 2rem 0;
`;

const Title = styled.h1`
  text-align: center;
  font-family: var(--font-display);
  color: var(--color-main);
  text-transform: uppercase;
  font-size: ${({ gameRunning }) => (gameRunning ? '4rem' : '8rem')};
  letter-spacing: 1rem;
  margin: 1rem;
  cursor: var(--btn-cursor);
  transition: font-size 1s;

  & span {
    font-size: 150%;
    vertical-align: middle;
  }
`;

const Header = ({ gameRunning, setGameRunning }) => {
  const backToHome = () => {
    setGameRunning(false);
    navigate('/');
  };

  return (
    <HeaderContainer>
      <Title gameRunning={gameRunning} onClick={backToHome}>
        <span>H</span>angman
      </Title>
    </HeaderContainer>
  );
};

export default Header;
