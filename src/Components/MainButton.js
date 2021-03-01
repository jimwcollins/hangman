import React from 'react';
import styled from 'styled-components';
import BloodSpot from '../images/blood-spot.svg';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16rem;
  width: 16rem;
  border: none;
  background-color: transparent;
  cursor: var(--btn-cursor);
  margin-right: 1rem;
  opacity: 0.8;
  background-image: url(${BloodSpot});
  background-position: cover;
  background-repeat: no-repeat;
  transition: all 1s;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const BtnText = styled.p`
  margin-top: 2rem;
  width: 25%;
  font-family: var(--font-text);
  font-size: 2.25rem;
  color: white;
`;

export default function MainButton({ onClick, text, className }) {
  return (
    <Button className={className} onClick={onClick}>
      <BtnText>{text}</BtnText>
    </Button>
  );
}
