import React from 'react';
import styled from 'styled-components';
import { ReactComponent as BtnSvg } from '../images/blood-swash.svg';

const Button = styled.button`
  display: relative;
  height: 8rem;
  width: 18rem;
  border: none;
  background-color: transparent;
  cursor: var(--btn-cursor);
  font-family: var(--font-text);
  font-size: 2rem;
  color: white;
`;

const BloodBtn = styled(BtnSvg)`
  height: 100%;
  width: 100%;
  fill: var(--color-main);
`;

const BtnText = styled.p`
  position: absolute;
  top: 50%;
  left: 60%;
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
