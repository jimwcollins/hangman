const Counter = (props) => {
  return (
    <div>
      <p>Guesses remaining: {props.attempts}</p>
    </div>
  );
};

export default Counter;
