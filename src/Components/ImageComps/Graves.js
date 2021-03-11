import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../breakpoints';
import { Transition } from 'react-transition-group';

import graveLeft from '../../images/Grave_Left.png';
import graveMid from '../../images/Grave_Mid.png';
import graveRight from '../../images/Grave_Right.png';

const GravesContainer = styled.div`
  position: absolute;
  left: 10rem;
  bottom: 0rem;
  height: 28rem;
  display: flex;
  align-items: flex-end;

  @media ${breakpoints.deskSml.width} {
    display: none;
  }

  @media ${breakpoints.deskMed.width} {
    left: 7rem;
    height: 23rem;
  }

  @media ${breakpoints.deskLg.width} {
    left: 15rem;
    height: 35rem;
  }
`;

const GraveLeft = styled.img`
  height: 70%;
  transform: ${({ state }) =>
    state === 'entered' ? 'translateY(0rem)' : 'translateY(30rem)'};
  transition: transform 1s cubic-bezier(0.2, 0.33, 0.69, 1.46);
  transition-delay: 0.25s;
`;

const GraveMid = styled.img`
  height: 100%;
  margin-left: -5rem;
  transform: ${({ state }) =>
    state === 'entered' ? 'translateY(0rem)' : 'translateY(30rem)'};
  transition: transform 1s cubic-bezier(0.2, 0.33, 0.69, 1.46);
`;

const GraveRight = styled.img`
  height: 50%;
  margin-left: -5rem;
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
