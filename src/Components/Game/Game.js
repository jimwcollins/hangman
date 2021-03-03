import React, { useState, useEffect, useReducer } from 'react';
import { Transition } from 'react-transition-group';
import { GameDiv, GameHangman, PhraseDiv } from './Game-styles';
import { gameReducer, initialGameState } from './Game-reducer';
import { getFilms } from '../../utils/api';
import { formatPhrase } from '../../utils/utils';

import Counter from '../Counter';
import Phrase from '../Phrase/Phrase';
import Keyboard from '../Keyboard/Keyboard';
import Result from '../Result';

const Game = ({ canvasSize }) => {
  const [phraseBank, setPhraseBank] = useState([]);
  const [fetchNewFilms, setFetchNewFilms] = useState(true);
  const [currentPhrase, setCurrentPhrase] = useState([]);
  const [gameState, dispatchGame] = useReducer(gameReducer, initialGameState);
  const [maxErrors] = useState(10);
  const [showHangman, setShowHangman] = useState(false);

  // Only fetch films when we first load the app
  useEffect(() => {
    const fetchFilms = async () => {
      try {
        // Retrieve films from MovieDB API then place in state
        const films = await getFilms();
        setPhraseBank(films);
        setFetchNewFilms(false);
      } catch (err) {
        console.log(err);
        alert('Error retrieving films');
      }
    };

    if (phraseBank.length === 0) fetchFilms();
  }, [phraseBank]);

  useEffect(() => {
    if (gameState.gameStatus === 'new' && !fetchNewFilms) {
      const randomIndex = Math.floor(Math.random() * phraseBank.length);
      const newPhrase = formatPhrase(phraseBank[randomIndex]);
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
  }, [gameState.gameStatus, fetchNewFilms, phraseBank]);

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
