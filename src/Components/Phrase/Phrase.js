import React, { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';

import {
  PhraseContainer,
  LetterBox,
  PhraseLetter,
  PhraseSpace,
} from './Phrase-styles';

// Component
const Phrase = ({ newPhrase, correctGuesses }) => {
  const [phraseState, setPhraseState] = useState({});

  // Populate an object with all letters in word and save to state
  // Each letters has initial value of false (has not been guessed)
  useEffect(() => {
    console.log('New phrase:', newPhrase);
    console.log('State:', phraseState);

    const phraseObj = newPhrase.reduce((phrase, letter) => {
      if (letter !== ' ') phrase[letter] = false;
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
        if (letter !== ' ') {
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
        } else {
          return <PhraseLetter space>{letter}</PhraseLetter>;
        }
      })}
    </PhraseContainer>
  );
};

export default Phrase;
