import React from 'react';
import './App.css';
import Header from './Header';
import Counter from './Counter';
import Phrase from './Phrase';
import AlphabetSelector from './AlphabetSelector';
import Result from './Result';

class App extends React.Component {
  state = {
    correctPhrase: ['H', 'A', 'N', 'G', 'M', 'A', 'N'],
    guesses: [],
    lettersToGuess: 7,
    attempts: 10,
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
        attempts: currentState.attempts - 1,
      };
      return newState;
    });
  };

  handleCorrectLetter = (lettersGuessed) => {
    this.setState((currentState) => {
      const newState = {
        guesses: [...currentState.guesses, lettersGuessed[0]],
        lettersToGuess: currentState.lettersToGuess - lettersGuessed.length,
      };
      return newState;
    });
  };

  resetGame = () => {
    this.setState({
      correctPhrase: ['H', 'A', 'N', 'G', 'M', 'A', 'N'],
      guesses: [],
      lettersToGuess: 7,
      attempts: 10,
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.lettersToGuess === 0 || this.state.attempts === 0 ? (
          this.state.lettersToGuess === 0 ? (
            <Result win="true" reset={this.resetGame} />
          ) : (
            <Result win="false" reset={this.resetGame} />
          )
        ) : (
          <div>
            <Counter attempts={this.state.attempts} />
            <Phrase
              correctPhrase={this.state.correctPhrase}
              guesses={this.state.guesses}
            />
            <AlphabetSelector handleGuess={this.handleGuess} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
