export const formatPhrase = (phrase) => {
  // Strip out anything that isn't a number, a letter or a space
  console.log('Formating phrase:', phrase);

  const regex = /[A-Z\s\d]/g;

  return phrase.toUpperCase().match(regex) || [];
};
