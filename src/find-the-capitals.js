function findTheCapitals(string) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i].toLowerCase()) {
      result.push(i);
      console.log(i);
    }
  }
  return result;
}

module.exports = findTheCapitals;
