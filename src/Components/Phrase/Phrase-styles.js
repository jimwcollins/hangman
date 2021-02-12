// Phrase styles
import styled from 'styled-components';

export const PhraseContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 7rem;
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  transform: ${({ state }) =>
    state === 'entered' ? 'translateY(0rem)' : 'translateY(-3rem)'};
  transition: all 0.5s;
`;

export const LetterBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 10rem;
`;

export const PhraseLetter = styled.div`
  font-family: var(--font-display);
  font-size: 6.5rem;
  color: ${({ correct }) =>
    correct ? 'var(--color-text)' : 'var(--color-main)'};
  letter-spacing: 2rem;
  margin: ${({ space }) =>
    space && '0 2rem'}; // If letter is a space add margin

  // Animation on letter guess
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  transform: ${({ state }) =>
    state === 'entered' ? 'translateY(0rem)' : 'translateY(-3rem)'};
  transition: all 1s;
`;

export const PhraseSpace = styled.div`
  font-family: var(--font-text);
  font-size: 6.5rem;
  color: var(--color-main);
  letter-spacing: 2rem;
  transform: translateY(-6rem);

  // Animation on letter guess
  opacity: ${({ state }) => (state === 'exited' ? 0 : 1)};
  transition: opacity 1s;
`;
