import React from 'react';
import './App.css';
import Header from './Header';
import Counter from './Counter';
import Phrase from './Phrase';
import AlphabetSelector from './AlphabetSelector';
import Result from './Result';
import Hangman from './Hangman';

class App extends React.Component {
  state = {
    correctPhrase: ['H', 'A', 'N', 'G', 'M', 'A', 'N'],
    guesses: [],
    lettersToGuess: 7,
    wrongGuesses: 0
  };

  handleGuess = (char) => {
    const result = this.state.correctPhrase.filter((letter) => {
      console.log(letter, char);
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
      const newState = {
        wrongGuesses: currentState.wrongGuesses + 1
      };
      return newState;
    });
  };

  handleCorrectLetter = (lettersGuessed) => {
    this.setState((currentState) => {
      const newState = {
        guesses: [...currentState.guesses, lettersGuessed[0]],
        lettersToGuess: currentState.lettersToGuess - lettersGuessed.length
      };
      return newState;
    });
  };

  resetGame = () => {
    this.setState({
      correctPhrase: ['H', 'A', 'N', 'G', 'M', 'A', 'N'],
      guesses: [],
      lettersToGuess: 7,
      wrongGuesses: 0
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Hangman />
        <Counter wrongGuesses={this.state.wrongGuesses} />
        <Phrase
          correctPhrase={this.state.correctPhrase}
          guesses={this.state.guesses}
        />
        {this.state.lettersToGuess === 0 || this.state.wrongGuesses === 10 ? (
          this.state.lettersToGuess === 0 ? (
            <Result win="true" reset={this.resetGame} />
          ) : (
            <Result win="false" reset={this.resetGame} />
          )
        ) : (
          <div className="game_area">
            <AlphabetSelector handleGuess={this.handleGuess} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
