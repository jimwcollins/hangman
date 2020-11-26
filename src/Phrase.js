const Phrase = (props) => {
  return (
    <div>
      {props.correctPhrase.map((letter) => {
        return <span> _ </span>;
      })}
    </div>
  );
};

export default Phrase;
