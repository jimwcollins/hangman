import React from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

import graveLeft from '../../images/Grave_Left.png';
import graveMid from '../../images/Grave_Mid.png';
import graveRight from '../../images/Grave_Right.png';

const GravesContainer = styled.div`
  position: absolute;
  left: 15rem;
  bottom: 0rem;
`;

const GraveLeft = styled.img`
  position: absolute;
  left: 0rem;
  bottom: 0rem;
  height: 20rem;
  transform: ${({ state }) =>
    state === 'entered' ? 'translateY(0rem)' : 'translateY(30rem)'};
  transition: transform 1s cubic-bezier(0.2, 0.33, 0.69, 1.46);
  transition-delay: 0.25s;
`;

const GraveMid = styled.img`
  position: absolute;
  left: 10rem;
  bottom: 0rem;
  height: 30rem;
  transform: ${({ state }) =>
    state === 'entered' ? 'translateY(0rem)' : 'translateY(30rem)'};
  transition: transform 1s cubic-bezier(0.2, 0.33, 0.69, 1.46);
`;

const GraveRight = styled.img`
  position: absolute;
  left: 25rem;
  bottom: 0rem;
  height: 15rem;
  transform: ${({ state }) =>
    state === 'entered' ? 'translateY(0rem)' : 'translateY(30rem)'};
  transition: transform 1s cubic-bezier(0.2, 0.33, 0.69, 1.46);
  transition-delay: 0.5s;
`;

const Graves = () => {
  return (
    <Transition timeout={1000} in={true} appear={true}>
      {(state) => (
        <GravesContainer>
          <GraveLeft src={graveLeft} state={state} />
          <GraveMid src={graveMid} state={state} />
          <GraveRight src={graveRight} state={state} />
        </GravesContainer>
      )}
    </Transition>
  );
};

export default Graves;
