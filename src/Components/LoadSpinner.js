import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as HourGlassIcon } from '../icons/hourglass.svg';

const SpinnerContainer = styled.div`
  grid-area: game;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spinnerAnim = keyframes`
  0% { transform: rotate(0); }
  10% { transform: rotate(0); }
  50% { transform: rotate(180deg); }
  60% { transform: rotate(180deg); }
  100% { transform: rotate(360deg); }
`;

const HourGlass = styled(HourGlassIcon)`
  height: 7rem;
  width: 7rem;
  fill: var(--color-main);
  animation: ${spinnerAnim} 1.5s infinite;
`;

export default function LoadSpinner() {
  return (
    <SpinnerContainer>
      <HourGlass />
    </SpinnerContainer>
  );
}
