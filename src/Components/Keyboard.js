import React from 'react';
import styled from 'styled-components';

const Keys = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: space-between;
  width: 80%;
  margin-top: 6rem;
`;

const Key = styled.button`
  margin: 0.5rem;
  padding: 0.5rem;
  width: 4rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${(props) => (props.used ? 'black' : 'var(--color-main)')};
  color: var(--color-text);
  opacity: ${(props) => (props.used ? 0.75 : 1)};
  cursor: var(--btn-cursor);
`;

class Keyboard extends React.Component {
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
      <Keys>
        {this.state.alphabet.split('').map((char) => {
          return (
            <>
              {this.state.buttonStatus.hasOwnProperty(char) ? (
                <Key used key={char}>
                  {char}
                </Key>
              ) : (
                <Key
                  key={char}
                  onClick={() => {
                    this.handleButton(char);
                  }}
                >
                  {char}
                </Key>
              )}
            </>
          );
        })}
      </Keys>
    );
  }
}

export default Keyboard;
