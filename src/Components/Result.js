import styled from 'styled-components';
import MainButton from './MainButton';

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const ResultText = styled.h2`
  text-align: center;
  font-family: var(--font-display);
  font-size: 6rem;
  color: var(--color-text);
  letter-spacing: 0.3rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

// const ResultMsg = styled(Welcome)``;

const Result = ({ gameStatus, reset }) => {
  let resultText;
  if (gameStatus === 'won') resultText = 'You survived';
  else if (gameStatus === 'lost') resultText = 'You died';

  return (
    <ResultContainer>
      <ResultText>{resultText}</ResultText>
      <MainButton onClick={reset} text="Play again?" />
    </ResultContainer>
  );
};

export default Result;
