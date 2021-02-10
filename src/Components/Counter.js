const Counter = (props) => {
  return (
    <p className="counter">Guesses remaining: {10 - props.wrongGuesses}</p>
  );
};

export default Counter;
