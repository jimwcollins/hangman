import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  grid-area: header;
  margin-bottom: 5rem;
`;

const Title = styled.h1`
  text-align: center;
  font-family: var(--font-display);
  color: var(--color-main);
  text-transform: uppercase;
  font-size: 8rem;
  letter-spacing: 1rem;
  margin: 1rem;

  & span {
    font-size: 150%;
    vertical-align: middle;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/" className="link">
        <Title>
          <span>H</span>angman
        </Title>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
