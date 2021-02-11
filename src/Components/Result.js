import styled from 'styled-components';
import Welcome from './Welcome';
import MainButton from './MainButton';

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

// const ResultMsg = styled(Welcome)``;

const Result = (props) => {
  return (
    <ResultContainer>
      <Welcome>{props.win === 'true' ? 'You survived' : 'You died'}</Welcome>
      <MainButton onClick={props.reset} text="Play again?" />
    </ResultContainer>
  );
};

export default Result;
