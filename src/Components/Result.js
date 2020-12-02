const Result = (props) => {
  return (
    <div>
      <h2>{props.win === 'true' ? 'You survived' : 'You died'}</h2>
      <button className="btn" onClick={props.reset}>
        Play again?
      </button>
    </div>
  );
};

export default Result;
