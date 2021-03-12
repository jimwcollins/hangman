// Phrase styles
import styled from 'styled-components';
import bloodLine from '../../images/blood-swash.svg';
import { breakpoints } from '../../breakpoints';

export const PhraseContainer = styled.p`
  overflow-wrap: normal;
  text-align: center;
  line-height: 1.7;
  letter-spacing: 1em;
  margin-bottom: 2rem;
  padding-left: 12rem;
  padding-right: ${({ showHangman }) => (showHangman ? '15rem' : '12rem')};
  cursor: default;
  transition: all 1s ease-in-out;
  transition-delay: 0.5s;
`;

export const PhraseLetter = styled.span`
  position: relative;
  font-family: var(--font-display);
  font-size: 7rem;
  color: ${({ correct }) =>
    correct ? 'var(--color-text)' : 'var(--color-main)'};
  margin: ${({ space }) => (space ? '0 1.5rem' : '0 0.5rem')};

  // Animation on letter guess
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  top: ${({ state }) => (state === 'entered' ? '0' : '-3rem')};
  transition: all 0.3s cubic-bezier(0.2, 0.33, 0.69, 1.46);

  @media ${breakpoints.deskLg.width} {
    font-size: 7.5rem;
  }

  @media ${breakpoints.tabletLg.width} {
    font-size: 4.5rem;
  }

  @media ${breakpoints.phoneLand.height} {
    font-size: 3rem;
  }

  @media ${breakpoints.phoneSm.width} {
    font-size: 3rem;
  }
`;

export const PhraseSpace = styled.span`
  position: relative;
  font-family: var(--font-display);
  font-size: 7rem;
  letter-spacing: 0.7em;
  color: var(--color-main);
  margin: 0 0.5rem;
  top: 0.25rem;
  background-image: url(${bloodLine});
  background-repeat: no-repeat;
  background-position: bottom;

  // Animation on letter guess
  opacity: ${({ state }) => (state === 'exiting' ? 0 : 1)};
  transition: opacity 0.2s;

  @media ${breakpoints.deskLg.width} {
    font-size: 7.5rem;
  }

  @media ${breakpoints.tabletLg.width} {
    font-size: 4.5rem;
  }

  @media ${breakpoints.phoneLand.height} {
    font-size: 3rem;
  }

  @media ${breakpoints.phoneSm.width} {
    font-size: 3.5rem;
  }
`;
