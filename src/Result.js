const Result = (props) => {
  return (
    <div>{props.win === true ? <p>You've Won!</p> : <p> You've Lost!</p>}</div>
  );
};

export default Result;
