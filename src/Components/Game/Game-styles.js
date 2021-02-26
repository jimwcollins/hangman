// Game styles
import styled from 'styled-components';

export const GameDiv = styled.div`
  grid-area: game;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const HangmanContainer = styled.div`
  flex: 0;
  right: 0;
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  width: ${({ state }) => (state === 'entered' ? '100%' : '0%')};
  transition: all 2s;
`;

export const PhraseDiv = styled.div`
  flex: 1;
  grid-area: phrase;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Control = styled.div`
  grid-area: control;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80rem;
`;
