import React from 'react';
import './App.css';
import Header from './Header';
import Hangman from './Hangman';
import Counter from './Counter';
import Phrase from './Phrase';
import AlphabetSelector from './AlphabetSelector';
import Result from './Result';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['NORTHCODERS'],
      correctPhrase: [],
      guesses: [],
      lettersToGuess: 0,
      wrongGuesses: 0,
      maxErrors: 10,
      gameStatus: 'new'
    };
    this.baseState = this.state;
  }

  render() {
    console.log('Rendering game: ', this.state.gameStatus);

    return (
      <div className="App">
        <Header />
        <Hangman
          gameStatus={this.state.gameStatus}
          drawTo={this.state.wrongGuesses}
        />
        <div className="game-area">
          {this.state.gameStatus === 'new' ? (
            <div className="new-game">
              <h2>Want to play a game?</h2>
              <button className="new-game__btn" onClick={this.newGame}>
                New Game
              </button>
            </div>
          ) : (
            <div className="game">
              <Counter wrongGuesses={this.state.wrongGuesses} />
              <Phrase
                correctPhrase={this.state.correctPhrase}
                guesses={this.state.guesses}
              />
              {this.state.gameStatus !== 'running' ? (
                this.state.gameStatus === 'won' ? (
                  <Result win="true" reset={this.resetGame} />
                ) : (
                  <Result win="false" reset={this.resetGame} />
                )
              ) : (
                <AlphabetSelector handleGuess={this.handleGuess} />
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  newGame = () => {
    // At the start of the game, grab a new word at random
    // Split into array and slot into our current correctPhrase
    const randomIndex = Math.floor(Math.random() * this.state.words.length);
    const newWord = this.state.words[randomIndex].split('');
    console.log('Fetching word:', randomIndex, ' ', newWord);

    this.setState({
      correctPhrase: newWord,
      lettersToGuess: newWord.length,
      gameStatus: 'running'
    });
  };

  handleGuess = (char) => {
    const result = this.state.correctPhrase.filter((letter) => {
      return letter === char;
    });
    if (result.length === 0) {
      this.handleIncorrectLetter();
    } else {
      this.handleCorrectLetter(result);
    }
  };

  handleIncorrectLetter = () => {
    this.setState((currentState) => {
      const wrongGuessesTotal = currentState.wrongGuesses + 1;
      const gameStatus =
        wrongGuessesTotal === this.state.maxErrors ? 'lost' : 'running';

      const newState = {
        wrongGuesses: wrongGuessesTotal,
        gameStatus
      };
      return newState;
    });
  };

  handleCorrectLetter = (lettersGuessed) => {
    this.setState((currentState) => {
      const newLettersToGuess =
        currentState.lettersToGuess - lettersGuessed.length;
      const gameStatus = newLettersToGuess === 0 ? 'won' : 'running';

      const newState = {
        guesses: [...currentState.guesses, lettersGuessed[0]],
        lettersToGuess: newLettersToGuess,
        gameStatus
      };
      return newState;
    });
  };

  resetGame = () => {
    this.setState(this.baseState);
  };
}

export default App;
