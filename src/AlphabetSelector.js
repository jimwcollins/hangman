import React from 'react';

class AlphabetSelector extends React.Component {
  state = { alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' };

  render() {
    return (
      <div>
        {this.state.alphabet.split('').map((char) => {
          return (
            <button
              key={char}
              onClick={() => {
                this.props.handleGuess(char);
              }}
            >
              {char}
            </button>
          );
        })}
      </div>
    );
  }
}

export default AlphabetSelector;
