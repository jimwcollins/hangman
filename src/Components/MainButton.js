import React from 'react';
import styled, { keyframes } from 'styled-components';
import BloodSpot from '../images/blood-spot.svg';

const buttonAnim = keyframes`
  0% { transform: scale(1) }
  50% { transform: scale(1.1) }
  100% { transform: scale(1)}
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16.5rem;
  width: 16.5rem;
  border: none;
  background-color: transparent;
  cursor: var(--btn-cursor);
  margin-right: 1rem;

  background-image: url(${BloodSpot});
  background-position: cover;
  background-repeat: no-repeat;
  animation: ${buttonAnim} 2.5s ease infinite;
  transition: all 1s;

  &:hover {
    animation-play-state: paused;
    opacity: 1;
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }
`;

const BtnText = styled.p`
  margin-top: 2.75rem;
  width: 100%;
  font-family: var(--font-display);
  font-size: 2.5rem;
  text-transform: uppercase;
  text-align: center;
  color: white;
`;

export default function MainButton({ onClick, text, className }) {
  return (
    <Button className={className} onClick={onClick}>
      <BtnText>{text}</BtnText>
    </Button>
  );
}
