import React, { useState, useEffect, useReducer } from 'react';
import { Transition } from 'react-transition-group';
import { GameDiv, GameHangman, PhraseDiv } from './Game-styles';
import { gameReducer, initialGameState } from './Game-reducer';
import { getFilms } from '../../utils/api';
import { filterPhrases, formatPhrase } from '../../utils/utils';

import Counter from '../Counter';
import Phrase from '../Phrase/Phrase';
import Keyboard from '../Keyboard/Keyboard';
import Result from '../Result';

const Game = ({ canvasSize }) => {
  const [phraseBank, setPhraseBank] = useState([]);
  const [currentPhrase, setCurrentPhrase] = useState([]);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState();
  const [gameState, dispatchGame] = useReducer(gameReducer, initialGameState);
  const [maxErrors] = useState(10);
  const [showHangman, setShowHangman] = useState(false);

  // Only fetch films when we first load the app
  // Or we've used all films in current batch (i.e. phrase bank is empty)
  useEffect(() => {
    const fetchFilms = async () => {
      try {
        // Randomly set a page of results to fetch from api
        // Filter out films with numbers then save to state
        const pageToFetch = 1 + Math.floor(Math.random() * 4);
        const apiPhrases = await getFilms(pageToFetch);
        const filteredPhrases = filterPhrases(apiPhrases);
        setPhraseBank(filteredPhrases);
      } catch (err) {
        console.log(err);
        alert('Sorry, error retrieving titles. Please try again later.');
      }
    };

    if (phraseBank.length === 0) fetchFilms();
  }, [phraseBank]);

  useEffect(() => {
    if (gameState.gameStatus === 'new' && phraseBank.length !== 0) {
      const randomIndex = Math.floor(Math.random() * phraseBank.length);
      const newPhrase = formatPhrase(phraseBank[randomIndex]);
      setCurrentPhrase(newPhrase);
      setCurrentPhraseIndex(randomIndex);

      // Discount spaces when calculating letters to guess
      const lettersToGuess = newPhrase.filter((letter) => letter !== ' ')
        .length;

      // Now use our reducer to update our game state
      dispatchGame({
        type: 'NEW',
        lettersToGuess,
      });
    }
  }, [gameState.gameStatus, phraseBank]);

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

    // Remove current phrase from phraseBank so we don't randomly get it again
    setPhraseBank((currentPhraseBank) => {
      const newPhraseBank = [...currentPhraseBank];
      newPhraseBank.splice(currentPhraseIndex, 1);
      return newPhraseBank;
    });

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
