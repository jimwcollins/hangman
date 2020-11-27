const Phrase = (props) => {
  return (
    <div>
      {props.correctPhrase.map((letter) => {
        return props.guesses.includes(letter) ? letter : ' _ ';
      })}
    </div>
  );
};

export default Phrase;
