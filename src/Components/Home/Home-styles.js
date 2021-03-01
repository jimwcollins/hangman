// Home styles
import styled from 'styled-components';
import Hangman from '../Hangman';
import MainButton from '../MainButton';

export const HomeDiv = styled.div`
  grid-area: game;
  width: 90%;
  display: flex;
  justify-content: space-around;
`;

export const Welcome = styled.div`
  grid-area: phrase;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const HomeHangman = styled(Hangman)`
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  transition: opacity 1s;
`;

export const WelcomeText = styled.h2`
  text-align: center;
  font-family: var(--font-display);
  font-size: 5.5rem;
  color: var(--color-text);
  letter-spacing: 0.2rem;
  margin-bottom: 2rem;
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  transform: ${({ state }) =>
    state === 'entered' ? 'translateY(0rem)' : 'translateY(-3rem)'};
  transition: all 1s;
`;

export const WelcomeButton = styled(MainButton)`
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  transform: ${({ state }) =>
    state === 'entered' ? 'translateY(0rem)' : 'translateY(3rem)'};
  transition: all 1s;
`;
