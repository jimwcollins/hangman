import React from 'react';
import './App.css';
import Header from './Header';
import Counter from './Counter';
import Phrase from './Phrase';
import AlphabetSelector from './AlphabetSelector';

class App extends React.Component {
  state = {
    correctPhrase: ['H', 'A', 'N', 'G', 'M', 'A', 'N'],
    guesses: ['H', 'M'],
    lettersToGuess: 7,
    attempts: 10,
  };
  handleGuess = (char) => {
    //btn press A
    //check if A is in the correct phrase
    //if A is in correct phrase, return true
    this.handleIncorrectLetter();
  };
  handleIncorrectLetter = () => {
    this.setState((currentState) => {
      const newState = {
        attempts: currentState.attempts - 1,
      };
      return newState;
    });
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
