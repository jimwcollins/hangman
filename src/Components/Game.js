import React, { useState, useEffect, useReducer } from 'react';

import Hangman from './Hangman';
import Counter from './Counter';
import Phrase from './Phrase';
import AlphabetSelector from './AlphabetSelector';
import Result from './Result';

// Use a reducer to manage our game state
const initialGameState = {
  guesses: [],
  lettersToGuess: 0,
  wrongGuesses: 0,
  gameStatus: 'new',
};

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
        guesses: [...currentGameState.guesses, action.correctLetters[0]],
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

const Game = () => {
  const [wordBank] = useState(['NORTHCODERS', 'HANGMAN', 'EASY']);
  const [maxErrors] = useState(10);
  const [currentWord, setCurrentWord] = useState([]);
  const [gameState, dispatchGame] = useReducer(gameReducer, initialGameState);

  useEffect(() => {
    if (gameState.gameStatus !== 'running') {
      // At the start of the game, grab a new word at random
      // Split into array and slot into our current currentWord
      const randomIndex = Math.floor(Math.random() * wordBank.length);
      const newWord = wordBank[randomIndex].split('');
      setCurrentWord(newWord);

      // Now use our reducer to update our game state
      dispatchGame({
        type: 'NEW',
        lettersToGuess: newWord.length,
      });
    }
  }, [wordBank, gameState.gameStatus]);

  const handleGuess = (char) => {
    const correctLetters = currentWord.filter((letter) => {
      return letter === char;
    });

    if (correctLetters.length === 0) {
      dispatchGame({ type: 'WRONG_GUESS', maxErrors });
    } else {
      dispatchGame({ type: 'CORRECT_GUESS', correctLetters });
    }
  };

  const resetGame = () => {
    dispatchGame({ type: 'RESET' });
  };

  return (
    <>
      <Hangman
        gameStatus={gameState.gameStatus}
        drawTo={gameState.wrongGuesses}
      />
      <div className="game-area">
        <div className="game">
          <Counter wrongGuesses={gameState.wrongGuesses} />
          <Phrase currentWord={currentWord} guesses={gameState.guesses} />
          {gameState.gameStatus !== 'running' ? (
            gameState.gameStatus === 'won' ? (
              <Result win="true" reset={resetGame} />
            ) : (
              <Result win="false" reset={resetGame} />
            )
          ) : (
            <AlphabetSelector handleGuess={handleGuess} />
          )}
        </div>
      </div>
    </>
  );
};

export default Game;
