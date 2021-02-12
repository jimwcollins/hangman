import React, { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';

import {
  PhraseContainer,
  LetterBox,
  PhraseLetter,
  PhraseSpace,
} from './Phrase-styles';

// Component
const Phrase = ({ newPhrase, correctGuesses, gameStatus }) => {
  const [showPhrase] = useState(true);
  const [phraseState, setPhraseState] = useState({});
  const [losingState, setLosingState] = useState({});

  // Populate an object with all letters in word and save to state
  // Each letters has initial value of false (has not been guessed)
  useEffect(() => {
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

  // Show missing letters once the game ends
  useEffect(() => {
    if (gameStatus === 'lost') {
      setPhraseState((prevState) => {
        setLosingState(prevState); // Save the final guessed state of our letters

        const newState = {};
        Object.entries(prevState).forEach(([letter, value]) => {
          if (value === false) newState[letter] = true;
          else newState[letter] = value;
        });
        return newState;
      });
    }
  }, [gameStatus]);

  // Return both letter and the gap - one hidden, one shown.
  // Transition the hide/show for each depending on values in phrase state
  // Take the colour of the letter from phrase state normally, or losing state
  // if the game has been lost
  return (
    <Transition in={showPhrase} timeout={500} appear={true}>
      {(state) => (
        <PhraseContainer state={state}>
          {newPhrase.map((letter, index) => {
            if (letter !== ' ') {
              return (
                <LetterBox key={index}>
                  <Transition in={phraseState[letter]} timeout={200}>
                    {(state) => (
                      <PhraseLetter
                        state={state}
                        correct={
                          gameStatus === 'lost'
                            ? losingState[letter]
                            : phraseState[letter]
                        }
                      >
                        {letter}
                      </PhraseLetter>
                    )}
                  </Transition>
                  <Transition in={!phraseState[letter]} timeout={200}>
                    {(state) => <PhraseSpace state={state}>_</PhraseSpace>}
                  </Transition>
                </LetterBox>
              );
            } else {
              return (
                <PhraseLetter space key={index}>
                  {letter}
                </PhraseLetter>
              );
            }
          })}
        </PhraseContainer>
      )}
    </Transition>
  );
};

export default Phrase;
