import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const Button = styled.button`
  height: 5rem;
  padding: 1rem;
  background-color: var(--color-main);
  border: none;
  cursor: var(--btn-cursor);
  font-family: var(--font-text);
  font-size: 1.75rem;
`;

const ButtonLink = styled(Link)`
  text-decoration: none;
  color: var(--color-text);
`;

export default function MainButton({ target, children }) {
  return (
    <Button>
      <ButtonLink to={target}>{children}</ButtonLink>
    </Button>
  );
}
