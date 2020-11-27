const Phrase = (props) => {
  return (
    <div>
      {props.correctPhrase.map((letter) => {
        return (
          <span className="phrase__letter">
            {props.guesses.includes(letter) ? letter : ' _ '}
          </span>
        );
      })}
    </div>
  );
};

export default Phrase;
