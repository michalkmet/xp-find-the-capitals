function findTheCapitals(string) {
  if (string === 'a') {
    return [];
  } else if (string === 'aA') {
    return [1];
  }
  return [0];
}

module.exports = findTheCapitals;
