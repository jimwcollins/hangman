import styled from 'styled-components';

const PhraseContainer = styled.div`
  margin-top: 7rem;
`;

const PhraseLetter = styled.span`
  font-family: var(--font-display);
  font-size: 6.5rem;
  color: var(--color-text);
  margin: 0 0.5rem;
`;

const PhraseSpace = styled.span`
  position: relative;
  font-family: var(--font-text);
  font-size: 6.5rem;
  color: var(--color-main);
  margin: 0 0.75rem;
  top: 0.5rem;
`;

const Phrase = ({ currentPhrase, guesses }) => {
  return (
    <PhraseContainer>
      {currentPhrase.map((letter) => {
        return (
          <>
            {guesses.includes(letter) ? (
              <PhraseLetter>{letter}</PhraseLetter>
            ) : (
              <PhraseSpace>_</PhraseSpace>
            )}
          </>
        );
      })}
    </PhraseContainer>
  );
};

export default Phrase;
