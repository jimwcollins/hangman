import styled from 'styled-components';

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CounterText = styled.p`
  font-family: var(--font-display);
  font-size: 2.5rem;
  color: white;
`;

const Counter = (props) => {
  return (
    <CounterContainer>
      <CounterText className="counter">Guesses remaining</CounterText>
      <CounterText className="counter">{10 - props.wrongGuesses}</CounterText>
    </CounterContainer>
  );
};

export default Counter;
