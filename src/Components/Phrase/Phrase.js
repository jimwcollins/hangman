import React, { useState, useEffect } from 'react';
import { SwitchTransition, Transition } from 'react-transition-group';

import { PhraseContainer, PhraseLetter, PhraseSpace } from './Phrase-styles';

const Phrase = ({ newPhrase, correctGuesses, gameStatus, showHangman }) => {
  const [phraseState, setPhraseState] = useState({});
  const [losingState, setLosingState] = useState({});

  // Set up new phrase state with all values false
  useEffect(() => {
    const phraseObj = newPhrase.reduce((phrase, letter) => {
      if (letter !== ' ') phrase[letter] = false;
      return phrase;
    }, {});

    setPhraseState(phraseObj);
  }, [newPhrase]);

  // Whenever a correct guess is made, change the value of that letter in phrase state
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

  // Generate phrase, using both the letter and the gap - one hidden, one shown.
  // Transition the hide/show for each depending on phrase state
  const phrase = newPhrase.map((letter, index) => {
    if (letter === ' ') {
      return (
        <PhraseLetter space key={index}>
          {letter}
        </PhraseLetter>
      );
    }

    return (
      <SwitchTransition mode="out-in">
        <Transition key={phraseState[letter]} timeout={300}>
          {(state) =>
            phraseState[letter] ? (
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
            ) : (
              <PhraseSpace state={state}>&nbsp;</PhraseSpace>
            )
          }
        </Transition>
      </SwitchTransition>
    );
  });

  return <PhraseContainer showHangman={showHangman}>{phrase}</PhraseContainer>;
};

export default Phrase;
