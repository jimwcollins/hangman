import React, { useState } from 'react';
import { Keys, Key, Break } from './Keyboard-styles';
import { Transition } from 'react-transition-group';

const Keyboard = ({ handleGuess }) => {
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
    <Transition in={showKeys} timeout={500} appear={true}>
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
  );
};

export default Keyboard;
