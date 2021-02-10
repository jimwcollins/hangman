const Phrase = ({ currentPhrase, guesses }) => {
  return (
    <div>
      {currentPhrase.map((letter) => {
        const letterClass = letter === ' ' ? 'phrase__space' : 'phrase__letter';

        return (
          <span className={letterClass}>
            {guesses.includes(letter) ? letter : ' _ '}
          </span>
        );
      })}
    </div>
  );
};

export default Phrase;
