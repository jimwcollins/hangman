import styled from 'styled-components';
import MainButton from './MainButton';

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;

const ResultText = styled.h2`
  text-align: center;
  font-family: var(--font-display);
  font-size: 4.75rem;
  color: var(--color-text);
  letter-spacing: 0.3rem;
  margin-bottom: 1rem;
`;

// const ResultMsg = styled(Welcome)``;

const Result = (props) => {
  return (
    <ResultContainer>
      <ResultText>
        {props.win === 'true' ? 'You survived' : 'You died'}
      </ResultText>
      <MainButton onClick={props.reset} text="Play again?" />
    </ResultContainer>
  );
};

export default Result;
