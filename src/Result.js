const Result = (props) => {
  return (
    <div>
      {props.win === 'true' ? <p>You've Won!</p> : <p> You've Lost!</p>}
      <button onClick={props.reset}>New Game</button>
    </div>
  );
};

export default Result;
