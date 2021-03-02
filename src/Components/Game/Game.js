import React, { useState, useEffect, useReducer } from 'react';
import { Transition } from 'react-transition-group';
import { GameDiv, GameHangman, PhraseDiv } from './Game-styles';
import { gameReducer, initialGameState } from './Game-reducer';

import Counter from '../Counter';
import Phrase from '../Phrase/Phrase';
import Keyboard from '../Keyboard/Keyboard';
import Result from '../Result';

// Initial phrases and game state
const phraseBank = [
  // 'HALLOWEEN',
  'THE SILENCE OF THE LAMBS',
  // 'THE SIXTH SENSE',
  // 'THE EXORCIST',
  // 'THE BABADOOK',
];

const Game = ({ canvasSize }) => {
  const [maxErrors] = useState(10);
  const [showHangman, setShowHangman] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState([]);
  const [gameState, dispatchGame] = useReducer(gameReducer, initialGameState);

  useEffect(() => {
    if (gameState.gameStatus === 'new') {
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
      if (gameState.wrongGuesses === 0) setShowHangman(true);
      dispatchGame({ type: 'WRONG_GUESS', maxErrors });
    } else {
      dispatchGame({ type: 'CORRECT_GUESS', correctLetters });
    }
  };

  const resetGame = () => {
    setCurrentPhrase([]);
    setShowHangman(false);
    dispatchGame({ type: 'RESET' });
  };

  return (
    <>
      <GameDiv>
        <Transition in={showHangman} timeout={200} appear={true}>
          {(state) => (
            <GameHangman
              drawTo={gameState.wrongGuesses}
              canvasSize={canvasSize}
              state={state}
            />
          )}
        </Transition>
        <PhraseDiv>
          <Phrase
            newPhrase={currentPhrase}
            correctGuesses={gameState.correctGuesses}
            gameStatus={gameState.gameStatus}
          />
          {gameState.gameStatus === 'running' && (
            <Counter wrongGuesses={gameState.wrongGuesses} />
          )}
        </PhraseDiv>
      </GameDiv>
      {gameState.gameStatus === 'running' ? (
        <Keyboard handleGuess={handleGuess} />
      ) : (
        <Result
          win={gameState.gameStatus === 'won' ? 'true' : 'false'}
          reset={resetGame}
        />
      )}
    </>
  );
};

export default Game;
