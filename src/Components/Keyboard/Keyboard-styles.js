// Keyboard styles
import styled, { keyframes } from 'styled-components';
import BloodSquare from '../../images/blood-square.svg';

const keysShake = keyframes`
  0% { transform: translateX(0) }
  25% { transform: translateX(-1rem) }
  50% { transform: translateX(0)  }
  75% { transform: translateX(1rem)  }
  100% { transform: translateX(0) }
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

  &.enter-active {
    animation: ${keysShake} 0.2s ease;
  }
`;

export const Key = styled.button`
  margin: 0.5rem;
  padding: 0.5rem;
  width: 6rem;
  height: 5.5rem;
  border: none;
  border-radius: 0.5rem;
  background-image: url(${BloodSquare});
  background-position: cover;
  background-repeat: no-repeat;
  background-color: transparent;
  font-family: var(--font-text);
  font-size: 3rem;
  color: var(--color-text);
  opacity: ${({ used }) => (used ? 0.5 : 1)};
  cursor: ${({ used }) => (used ? '' : 'var(--btn-cursor)')};
  transition: transform 0.5s;

  &:hover {
    transform: ${({ used }) => (used ? '' : 'scale(1.2)')};
  }

  &:focus {
    outline: none;
  }
`;

// Use a break div to force line break in flex
export const Break = styled.div`
  flex-basis: 100%;
  width: 0px;
  height: 0px;
  overflow: hidden;
  display: inline-block;
`;
