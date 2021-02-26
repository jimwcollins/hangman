// Use a reducer to manage our game state
export const initialGameState = {
  correctGuesses: [],
  lettersToGuess: 0,
  wrongGuesses: 0,
  gameStatus: 'new',
};

export const gameReducer = (currentGameState, action) => {
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
