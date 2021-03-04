// Game styles
import styled from 'styled-components';
import Hangman from '../Hangman';

export const GameContainer = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 56% 44%;
  grid-template-areas: 'game' 'control';
  column-gap: 5rem;
  justify-items: center;
`;

export const GameDiv = styled.div`
  grid-area: game;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  transition: opacity 0.7s;
`;

export const GameHangman = styled(Hangman)`
  width: 100%;
  height: 100%;
  flex: 0;
  right: 0;
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  width: ${({ state }) => (state === 'entered' ? '100%' : '0%')};
  transition: all 2s;
`;

export const Control = styled.div`
  grid-area: control;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
