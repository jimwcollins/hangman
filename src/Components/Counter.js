import styled from 'styled-components';
import BloodSpot from '../images/blood-spot.svg';

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
`;

const CounterText = styled.p`
  font-family: var(--font-display);
  font-size: 1.6rem;
  color: white;
  text-transform: uppercase;
  margin-top: 1.7rem;
`;

const CounterNum = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 9rem;
  width: 9rem;
  background-image: url(${BloodSpot});
  background-position: cover;
  background-repeat: no-repeat;
`;

const CounterTextNum = styled(CounterText)`
  font-size: 2.5rem;
`;

const Counter = (props) => {
  return (
    <CounterContainer>
      <CounterText className="counter">Guesses</CounterText>
      <CounterNum>
        <CounterTextNum className="counter">
          {10 - props.wrongGuesses}
        </CounterTextNum>
      </CounterNum>
      <CounterText className="counter">remaining</CounterText>
    </CounterContainer>
  );
};

export default Counter;
