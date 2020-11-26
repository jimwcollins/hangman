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
    lettersToGuess: 7
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Counter guesses="5" />
        <Phrase
          correctPhrase={this.state.correctPhrase}
          guesses={this.state.guesses}
        />
        <AlphabetSelector />
      </div>
    );
  }
}

export default App;
