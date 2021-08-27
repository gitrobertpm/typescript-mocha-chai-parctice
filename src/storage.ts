// Title-ize a string
export const titleCase: Function = (str: string) => {

  if (str === '' || str === null) {
    console.error('ERROR: Invalid input');
    return 'Please enter a string';
  }

  const titled = str.split(' ').map((word, indy, arry) => {

    // words that generally shouldn't be caps according to the CHicago manual of style
    const uncaps = ['a', 'an', 'the', 'for', 'and', 'nor', 'but', 'or', 'yet', 'so', 'at', 'around', 'by', 'after', 'along', 'from', 'of', 'on', 'to', 'with', 'without' ];

    // Uppercase i
    if (word === 'i') {
      return 'I';
    }

    if (indy === 0 || indy === arry.length - 1) {
      return word[0].toUpperCase() + word.slice(1);
    }

    // Don't cap if word is in the uncaps array above or includes apostrophe
    if (uncaps.includes(word) ||  word.includes("'")) {
      return word;
    } 
    
    // Uppercase any other word and return
    return word[0].toUpperCase() + word.slice(1);

    // join word array
  }).join(' ');

  console.log(titled);
  return titled;
};