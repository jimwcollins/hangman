import styled from 'styled-components';
import { breakpoints } from '../../breakpoints';

import Hangman from '../Hangman/Hangman';

export const GameContainer = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 55% 45%;
  grid-template-areas: 'game' 'control';
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  transition: opacity 0.7s;

  @media ${breakpoints.deskLg.height} {
    grid-template-rows: 65% 35%;
  }

  @media ${breakpoints.phoneLand.height} {
    grid-template-rows: 58% 42%;
  }
`;

export const GameDiv = styled.div`
  grid-area: game;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${breakpoints.tabletLg.width} {
    flex-direction: column;
  }

  @media ${breakpoints.phoneLand.height} {
    flex-direction: row;
  }
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
    max-height: 36rem;
    max-width: 28rem;
  }

  @media ${breakpoints.tabletLg.width} {
    max-height: 38rem;
    max-width: 30rem;
    margin-bottom: 10rem;
  }

  @media ${breakpoints.tabletSm.width} {
    max-height: 28rem;
    max-width: 22rem;
    margin-bottom: 8rem;
  }

  @media ${breakpoints.phoneSm.width} {
    max-height: 20rem;
    max-width: 18rem;
    margin-bottom: 5rem;
  }

  @media ${breakpoints.phoneLand.height} {
    max-height: 18rem;
    max-width: 16rem;
    margin-bottom: 0rem;
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
