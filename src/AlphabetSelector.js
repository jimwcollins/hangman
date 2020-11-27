import React from 'react';

class AlphabetSelector extends React.Component {
  state = {
    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    buttonStatus: {},
  };

  handleButton = (char) => {
    this.setState((state) => {
      const newState = {
        buttonStatus: { ...state.buttonStatus, [char]: true },
      };
      return newState;
    });
    this.props.handleGuess(char);
  };

  render() {
    return (
      <div class="btn-container">
        {this.state.alphabet.split('').map((char) => {
          return (
            <span class="btn-span">
              {this.state.buttonStatus.hasOwnProperty(char) ? (
                <button class="btn-used" key={char}>
                  {char}
                </button>
              ) : (
                <button
                  class="btn"
                  key={char}
                  onClick={() => {
                    this.handleButton(char);
                  }}
                >
                  {char}
                </button>
              )}
            </span>
          );
        })}
      </div>
    );
  }
}

export default AlphabetSelector;
