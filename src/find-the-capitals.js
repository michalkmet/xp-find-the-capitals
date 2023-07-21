function findTheCapitals(string) {
  if (!string) {
    throw new Error('Invalid input');
  }
  let result = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i].toLowerCase()) {
      result.push(i);
    }
  }
  return result;
}

module.exports = findTheCapitals;
