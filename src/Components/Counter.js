import styled from 'styled-components';

const CounterText = styled.p`
  font-size: 1.5rem;
  color: white;
`;

const Counter = (props) => {
  return (
    <CounterText className="counter">
      Guesses remaining: {10 - props.wrongGuesses}
    </CounterText>
  );
};

export default Counter;
