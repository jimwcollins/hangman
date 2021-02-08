const Phrase = ({ currentWord, guesses }) => {
  return (
    <div>
      {currentWord.map((letter) => {
        return (
          <span className="phrase__letter">
            {guesses.includes(letter) ? letter : ' _ '}
          </span>
        );
      })}
    </div>
  );
};

export default Phrase;
