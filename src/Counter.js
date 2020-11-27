const Counter = (props) => {
  return (
    <div>
      <p>Guesses remaining: {10 - props.wrongGuesses}</p>
    </div>
  );
};

export default Counter;
