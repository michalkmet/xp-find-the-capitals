function findTheCapitals(string) {
  if (typeof string != 'string') throw new Error('Invalid input');

  // let result = [];
  // for (let i = 0; i < string.length; i++) {
  //   if (string[i] !== string[i].toLowerCase()) result.push(i);
  // }
  // return result;

  return [...string].map((char, index) => {
      console.log('char: ', char);
      console.log('index: ', index);
      if (char !== char.toLowerCase()) {
        return index;
      }
  }).filter((results) => {
    typeof results === 'number';
  });
  // return result;
}

module.exports = findTheCapitals;
