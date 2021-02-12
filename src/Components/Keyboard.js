import React from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

const Keys = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: space-between;
  width: 80%;
  margin-top: 6rem;
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  transform: ${({ state }) =>
    state === 'entered' ? 'translateY(0rem)' : 'translateY(3rem)'};
  transition: all 0.5s;
`;

const Key = styled.button`
  margin: 0.5rem;
  padding: 0.5rem;
  width: 4rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${({ used }) => (used ? 'black' : 'var(--color-main)')};
  color: var(--color-text);
  opacity: ${({ used }) => (used ? 0.75 : 1)};
  cursor: var(--btn-cursor);
`;

class Keyboard extends React.Component {
  state = {
    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    buttonStatus: {},
    showKeys: true,
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
      <Transition in={this.state.showKeys} timeout={500} appear={true}>
        {(state) => (
          <Keys state={state}>
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
        )}
      </Transition>
    );
  }
}

export default Keyboard;
