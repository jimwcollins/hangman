// Game styles
import styled from 'styled-components';
import Hangman from '../Hangman/Hangman';

export const GameContainer = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 60% 40%;
  grid-template-areas: 'game' 'control';
  column-gap: 5rem;
  justify-items: center;
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  transition: opacity 0.7s;
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
  max-height: 60rem;
  align-self: flex-end;
  flex: ${({ state }) => (state === 'entered' ? 1 : 0)};
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  width: ${({ state }) => (state === 'entered' ? '100%' : '0%')};
  padding-right: 2rem;
  align-self: center;
  transition: all 0.5s ease;
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
