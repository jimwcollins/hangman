export const formatPhrase = (phrase) => {
  // Strip out anything that isn't a letter or a space
  const formatRegex = /[A-Z\s\d]/g;
  return phrase.toUpperCase().match(formatRegex) || [];
};

export const filterPhrases = (phrases) => {
  // Check titles before adding (so they do not contains numbers)
  return phrases.filter((phrase) => checkPhrase(phrase));
};

export const checkPhrase = (phrase) => {
  if (phrase.length > 35 || phrase.length === 0) return false;

  // If the phrase contains numbers, reject it
  const checkNums = /[\d]/g;

  return checkNums.test(phrase) ? false : true;
};
