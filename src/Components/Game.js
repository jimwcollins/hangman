import React, { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';

import Hangman from './Hangman';
import Counter from './Counter';
import Phrase from './Phrase/Phrase';
import Keyboard from './Keyboard';
import Result from './Result';

// Styles
const HangmanContainer = styled.div`
  grid-area: hangman;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

// Initial phrases and game state
const phraseBank = [
  'HALLOWEEN',
  'THE SILENCE OF THE LAMBS',
  'THE SIXTH SENSE',
  'THE EXORCIST',
  'THE BABADOOK',
  'T E',
];

const initialGameState = {
  correctGuesses: [],
  lettersToGuess: 0,
  wrongGuesses: 0,
  gameStatus: 'new',
};

// Use a reducer to manage our game state
const gameReducer = (currentGameState, action) => {
  switch (action.type) {
    case 'NEW':
      return {
        ...currentGameState,
        lettersToGuess: action.lettersToGuess,
        gameStatus: 'running',
      };

    case 'CORRECT_GUESS':
      const newLettersToGuess =
        currentGameState.lettersToGuess - action.correctLetters.length;

      return {
        ...currentGameState,
        correctGuesses: [
          ...currentGameState.correctGuesses,
          action.correctLetters[0],
        ],
        lettersToGuess: newLettersToGuess,
        gameStatus: newLettersToGuess === 0 ? 'won' : 'running',
      };

    case 'WRONG_GUESS':
      const newWrongGuesses = currentGameState.wrongGuesses + 1;

      return {
        ...currentGameState,
        wrongGuesses: newWrongGuesses,
        gameStatus: newWrongGuesses === action.maxErrors ? 'lost' : 'running',
      };

    case 'RESET':
      return initialGameState;

    default:
      throw new Error('Error updating game state');
  }
};

// Component
const Game = ({ canvasSize }) => {
  const [maxErrors] = useState(10);
  const [currentPhrase, setCurrentPhrase] = useState([]);
  const [gameState, dispatchGame] = useReducer(gameReducer, initialGameState);

  useEffect(() => {
    if (gameState.gameStatus === 'new') {
      // At the start of the game, grab a new word at random
      // Split into array and slot into our current currentPhrase
      const randomIndex = Math.floor(Math.random() * phraseBank.length);
      const newPhrase = phraseBank[randomIndex].split('');
      setCurrentPhrase(newPhrase);

      // Discount spaces when calculating letters to guess
      const lettersToGuess = newPhrase.filter((letter) => letter !== ' ')
        .length;

      // Now use our reducer to update our game state
      dispatchGame({
        type: 'NEW',
        lettersToGuess,
      });
    }
  }, [gameState.gameStatus]);

  const handleGuess = (char) => {
    const correctLetters = currentPhrase.filter((letter) => letter === char);

    if (correctLetters.length === 0) {
      dispatchGame({ type: 'WRONG_GUESS', maxErrors });
    } else {
      dispatchGame({ type: 'CORRECT_GUESS', correctLetters });
    }
  };

  const resetGame = () => {
    setCurrentPhrase([]);
    dispatchGame({ type: 'RESET' });
  };

  return (
    <>
      <HangmanContainer>
        <Hangman drawTo={gameState.wrongGuesses} canvasSize={canvasSize} />
        <Counter wrongGuesses={gameState.wrongGuesses} />
      </HangmanContainer>
      <div className="control">
        <Phrase
          newPhrase={currentPhrase}
          correctGuesses={gameState.correctGuesses}
        />
        {gameState.gameStatus !== 'running' ? (
          <Result
            win={gameState.gameStatus === 'won' ? 'true' : 'false'}
            reset={resetGame}
          />
        ) : (
          <Keyboard handleGuess={handleGuess} />
        )}
      </div>
    </>
  );
};

export default Game;
