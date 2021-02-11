import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  height: 5rem;
  padding: 1rem;
  background-color: var(--color-main);
  border: none;
  border-radius: 1rem;
  cursor: var(--btn-cursor);
  font-family: var(--font-text);
  font-size: 1.75rem;
  color: var(--color-text);
`;

export default function MainButton({ onClick, text, className }) {
  return (
    <Button onClick={onClick} className={className}>
      {text}
    </Button>
  );
}
