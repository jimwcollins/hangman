// Keyboard styles
import styled from 'styled-components';
import BloodSquare from '../../images/blood-square.svg';

export const KeyboardDiv = styled.div`
  grid-area: control;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90rem;
`;

export const Keys = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: space-between;
  width: 100%;
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  transform: ${({ state }) =>
    state === 'entered' ? 'translateY(0rem)' : 'translateY(3rem)'};
  transition: all 0.5s;
`;

export const Key = styled.button`
  margin: 0.5rem;
  padding: 0.5rem;
  width: 5.5rem;
  height: 5rem;
  border: none;
  border-radius: 0.5rem;
  background-image: url(${BloodSquare});
  background-position: cover;
  background-repeat: no-repeat;
  background-color: transparent;
  font-family: var(--font-text);
  font-size: 2.25rem;
  color: var(--color-text);
  opacity: ${({ used }) => (used ? 0.5 : 1)};
  cursor: ${({ used }) => (used ? '' : 'var(--btn-cursor)')};
`;

// Use a break div to force line break in flex
export const Break = styled.div`
  flex-basis: 100%;
  width: 0px;
  height: 0px;
  overflow: hidden;
  display: inline-block;
`;
