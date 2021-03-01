import React from 'react';
import styled from 'styled-components';
import { ReactComponent as BtnSvg } from '../images/blood-spot.svg';

const Button = styled.button`
  display: relative;
  height: 16rem;
  width: 16rem;
  border: none;
  background-color: transparent;
  cursor: var(--btn-cursor);
  margin-right: 1rem;

  &:hover {
    transform: scale(1.2);
  }
`;

const BloodBtn = styled(BtnSvg)`
  height: 100%;
  width: 100%;
  fill: var(--color-main);
`;

const BtnText = styled.p`
  position: absolute;
  top: 58%;
  left: 50%;
  width: 25%;
  font-family: var(--font-text);
  font-size: 2.25rem;
  color: white;
  transform: translate(-50%, -50%);
`;

export default function MainButton({ onClick, text, className }) {
  return (
    <Button className={className} onClick={onClick}>
      <BloodBtn />
      <BtnText>{text}</BtnText>
    </Button>
  );
}
