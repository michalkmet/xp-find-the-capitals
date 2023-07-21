function findTheCapitals(string) {
  if (typeof string != 'string') throw new Error('Invalid input');

  // let result = [];
  // for (let i = 0; i < string.length; i++) {
  //   if (string[i] !== string[i].toLowerCase()) result.push(i);
  // }
  // return result;

  return [...string].map((char, index) => {
      if (char !== char.toLowerCase()) {
        return index;
      }
  }).filter((results) => {
    return typeof results === 'number';
  });
}

module.exports = findTheCapitals;
