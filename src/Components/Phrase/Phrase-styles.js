// Phrase styles
import styled from 'styled-components';

export const PhraseContainer = styled.p`
  overflow-wrap: normal;
  text-align: center;
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  transition: opacity 0.5s;
`;

export const LetterBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 10rem;
`;

export const PhraseLetter = styled.span`
  position: relative;
  font-family: var(--font-display);
  font-size: 5.5rem;
  color: ${({ correct }) =>
    correct ? 'var(--color-text)' : 'var(--color-main)'};
  margin: ${({ space }) => (space ? '0 1rem' : '0 0.5rem')};

  // Animation on letter guess
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  top: ${({ state }) => (state === 'entered' ? '0' : '-3rem')};
  transition: all 0.3s cubic-bezier(0.2, 0.33, 0.69, 1.46);
`;

export const PhraseSpace = styled.span`
  position: relative;
  font-family: var(--font-text);
  font-size: 5.5rem;
  color: var(--color-main);
  margin: 0 0.5rem;
  top: 0.25rem;

  // Animation on letter guess
  opacity: ${({ state }) => (state === 'exiting' ? 0 : 1)};
  transition: opacity 0.2s;
`;
