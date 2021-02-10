import React from 'react';
import styled from 'styled-components';

const WelcomeText = styled.h2`
  text-align: center;
  font-family: var(--font-display);
  font-size: 5rem;
  color: var(--color-text);
  margin: 5rem;
`;

export default function Welcome({ children }) {
  return <WelcomeText>{children}</WelcomeText>;
}
