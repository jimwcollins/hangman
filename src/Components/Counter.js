import styled from 'styled-components';
import BloodSpot from '../images/blood-spot.svg';

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-top: 0.5rem;
`;

const CounterText = styled.p`
  font-family: var(--font-display);
  font-size: 2.5rem;
  color: white;
  text-transform: uppercase;
  margin-top: 1.7rem;
`;

const CounterNum = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
  width: 10rem;
  background-image: url(${BloodSpot});
  background-position: cover;
  background-repeat: no-repeat;
`;

const CounterTextNum = styled(CounterText)`
  font-size: 4.5rem;
`;

const Counter = ({ wrongGuesses, state }) => {
  return (
    <CounterContainer state={state}>
      <CounterText className="counter">Guesses</CounterText>
      <CounterNum>
        <CounterTextNum className="counter">{10 - wrongGuesses}</CounterTextNum>
      </CounterNum>
      <CounterText className="counter">remaining</CounterText>
    </CounterContainer>
  );
};

export default Counter;
