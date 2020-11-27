import React from 'react';
import './App.css';
import Header from './Header';
import Counter from './Counter';
import Phrase from './Phrase';
import AlphabetSelector from './AlphabetSelector';

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
      this.handleCorrectLetter(result.length);
    }
  };
  handleIncorrectLetter = () => {
    if (this.state.attempts === 0) {
      //new component for results/game over!
      console.log('Game Over!');
    } else {
      this.setState((currentState) => {
        const newState = {
          attempts: currentState.attempts - 1,
        };
        return newState;
      });
    }
  };

  handleCorrectLetter = (lettersGuessed) => {
    this.setState((currentState) => {
      const newState = {
        lettersToGuess: currentState.lettersToGuess - lettersGuessed,
      };
      return newState;
    });
    if (this.state.lettersToGuess === 0) {
      console.log("You've Won");
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Counter attempts={this.state.attempts} />
        <Phrase
          correctPhrase={this.state.correctPhrase}
          guesses={this.state.guesses}
        />
        <AlphabetSelector handleGuess={this.handleGuess} />
      </div>
    );
  }
}

export default App;
