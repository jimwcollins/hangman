import React, { useState, useEffect, useReducer } from 'react';
import { Transition } from 'react-transition-group';
import { GameContainer, GameDiv, GameHangman, Control } from './Game-styles';
import { gameReducer, initialGameState } from './Game-reducer';
import { getFilms } from '../../utils/api';
import { filterPhrases, formatPhrase } from '../../utils/utils';

import Counter from '../Counter';
import Phrase from '../Phrase/Phrase';
import Keyboard from '../Keyboard/Keyboard';
import Result from '../Result';
import LoadSpinner from '../LoadSpinner';

const Game = ({ canvasSize }) => {
  const [phraseBank, setPhraseBank] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPhrase, setCurrentPhrase] = useState([]);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState();
  const [gameState, dispatchGame] = useReducer(gameReducer, initialGameState);
  const [showGame, setShowGame] = useState(true);
  const [maxErrors] = useState(10);
  const [showHangman, setShowHangman] = useState(false);

  // Only fetch films when we first load the app
  // Or we've used all films in current batch (i.e. phrase bank is empty)
  useEffect(() => {
    const fetchPhrases = async () => {
      try {
        // Randomly set a page of results to fetch from api
        // Filter out films with numbers then save to state
        const pageToFetch = 1 + Math.floor(Math.random() * 4);
        const apiPhrases = await getFilms(pageToFetch);
        const filteredPhrases = filterPhrases(apiPhrases);
        setPhraseBank(filteredPhrases);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        alert('Sorry, error retrieving titles. Please try again later.');
      }
    };

    if (phraseBank.length === 0) fetchPhrases();
  }, [phraseBank]);

  useEffect(() => {
    if (gameState.gameStatus === 'new' && phraseBank.length !== 0) {
      const randomIndex = Math.floor(Math.random() * phraseBank.length);
      const newPhrase = formatPhrase(phraseBank[randomIndex]);
      setCurrentPhrase(newPhrase);
      setCurrentPhraseIndex(randomIndex);
      setShowGame(true);

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
    setShowGame(false);

    // Remove current phrase from phraseBank so we don't randomly get it again
    setPhraseBank((currentPhraseBank) => {
      const newPhraseBank = [...currentPhraseBank];
      newPhraseBank.splice(currentPhraseIndex, 1);
      return newPhraseBank;
    });

    setTimeout(() => {
      setShowHangman(false);
    }, 1000);

    setTimeout(() => {
      dispatchGame({ type: 'RESET' });
    }, 1500);
  };

  if (isLoading) {
    return <LoadSpinner />;
  }

  return (
    <Transition in={showGame} timeout={700} appear={true}>
      {(showGameState) => (
        <GameContainer>
          <GameDiv state={showGameState}>
            <Transition in={showHangman} timeout={200} appear={true}>
              {(hangmanState) => (
                <GameHangman
                  drawTo={gameState.wrongGuesses}
                  canvasSize={canvasSize}
                  state={hangmanState}
                />
              )}
            </Transition>
            <Phrase
              newPhrase={currentPhrase}
              correctGuesses={gameState.correctGuesses}
              gameStatus={gameState.gameStatus}
            />
          </GameDiv>

          {gameState.gameStatus === 'running' ? (
            <Control>
              <Counter
                wrongGuesses={gameState.wrongGuesses}
                state={showGameState}
              />
              <Keyboard handleGuess={handleGuess} />
            </Control>
          ) : (
            <Result
              gameStatus={gameState.gameStatus}
              reset={resetGame}
              state={showGameState}
            />
          )}
        </GameContainer>
      )}
    </Transition>
  );
};

export default Game;
