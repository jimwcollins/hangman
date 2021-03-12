import styled from 'styled-components';
import { breakpoints } from '../../breakpoints';

import Hangman from '../Hangman/Hangman';

export const GameContainer = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 55% 45%;
  grid-template-areas: 'game' 'control';
  column-gap: 5rem;
  justify-items: center;
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  transition: opacity 0.7s;

  @media ${breakpoints.deskLg.height} {
    grid-template-rows: 65% 35%;
  }
`;

export const GameDiv = styled.div`
  grid-area: game;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GameHangman = styled(Hangman)`
  height: 100%;
  width: auto;
  max-height: 46rem;
  max-width: 40rem;
  align-self: flex-end;
  width: ${({ state }) => (state === 'entered' ? '100%' : '0%')};
  opacity: ${({ state }) => (state === 'entered' ? '1' : '0')};
  align-self: center;
  transition: all 0.75s ease-in-out;

  @media ${breakpoints.deskLg.width} {
    max-height: 68rem;
    max-width: 60rem;
  }

  @media ${breakpoints.deskMed.width} {
    max-height: 48rem;
    max-width: 40rem;
  }

  @media ${breakpoints.deskSml.width} {
    max-height: 38rem;
    max-width: 30rem;
  }
`;

export const Control = styled.div`
  grid-area: control;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  opacity: ${({ controlState }) => (controlState === 'entered' ? 1 : 0)};
  transition: opacity 0.5s;
`;
