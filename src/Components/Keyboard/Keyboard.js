import React, { useState } from 'react';
import { Keys, Key, Break } from './Keyboard-styles';
import { Transition, CSSTransition } from 'react-transition-group';

const Keyboard = ({ handleGuess, wrongGuess, setWrongGuess }) => {
  const [alphabet] = useState('QWERTYUIOPASDFGHJKLZXCVBNM');
  const [buttonStatus, setButtonStatus] = useState({});
  const [showKeys] = useState(true);

  const handleButton = (char) => {
    setButtonStatus((currBtns) => {
      const newBtns = {
        ...currBtns,
        [char]: true,
      };

      return newBtns;
    });

    handleGuess(char);
  };

  return (
    <CSSTransition
      in={wrongGuess}
      timeout={200}
      onEntered={() => setWrongGuess(false)}
    >
      <Transition in={showKeys} timeout={1250} appear={true}>
        {(state) => (
          <Keys state={state}>
            {alphabet.split('').map((char) => {
              return (
                <>
                  {buttonStatus.hasOwnProperty(char) ? (
                    <Key used key={char}>
                      {char}
                    </Key>
                  ) : (
                    <Key
                      key={char}
                      onClick={() => {
                        handleButton(char);
                      }}
                    >
                      {char}
                    </Key>
                  )}
                  {(char === 'P' || char === 'L') && <Break />}
                </>
              );
            })}
          </Keys>
        )}
      </Transition>
    </CSSTransition>
  );
};

export default Keyboard;
