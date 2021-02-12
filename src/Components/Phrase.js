import React, { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import styled from 'styled-components';

// Styles
const PhraseContainer = styled.div`
  display: flex;
  margin-top: 7rem;
`;

const LetterBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const PhraseLetter = styled.div`
  font-family: var(--font-display);
  font-size: 6.5rem;
  color: var(--color-text);
  letter-spacing: 2rem;

  // Animation on letter guess
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};

  transform: ${({ state }) =>
    state === 'entered' ? 'translateY(0rem)' : 'translateY(-3rem)'};

  transition: all 1s;
`;

const PhraseSpace = styled.div`
  font-family: var(--font-text);
  font-size: 6.5rem;
  color: var(--color-main);
  letter-spacing: 2rem;
  transform: translateY(-8rem);

  // Animation on letter guess
  opacity: ${({ state }) => (state === 'exited' ? 0 : 1)};
  transition: opacity 1s;
`;

// Component
const Phrase = ({ newPhrase, correctGuesses }) => {
  const [phraseState, setPhraseState] = useState({});

  // Populate an object with all letters in word and save to state
  // Each letters has initial value of false (has not been guessed)
  useEffect(() => {
    console.log('New phrase:', newPhrase);
    console.log('State:', phraseState);

    const phraseObj = newPhrase.reduce((phrase, letter) => {
      phrase[letter] = false;
      return phrase;
    }, {});

    setPhraseState(phraseObj);
  }, [newPhrase]);

  // Whenever a correct guess is made, change the value of that letter
  // in the phrase state to true
  useEffect(() => {
    if (correctGuesses.length > 0) {
      const newGuess = correctGuesses[correctGuesses.length - 1];
      setPhraseState((phraseState) => ({ ...phraseState, [newGuess]: true }));
    }
  }, [correctGuesses]);

  // Return both letter and the gap - one hidden, one shown.
  // Transition the hide/show for each depending on values in phrase state
  return (
    <PhraseContainer>
      {newPhrase.map((letter) => {
        return (
          <LetterBox>
            <Transition in={phraseState[letter]} timeout={200}>
              {(state) => <PhraseLetter state={state}>{letter}</PhraseLetter>}
            </Transition>
            <Transition in={!phraseState[letter]} timeout={200}>
              {(state) => <PhraseSpace state={state}>_</PhraseSpace>}
            </Transition>
          </LetterBox>
        );
      })}
    </PhraseContainer>
  );
};

export default Phrase;
