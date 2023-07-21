function findTheCapitals(s) {
  if (typeof s != 'string') throw new Error('Invalid input');
  return [...s].map((c, i) => (c !== c.toLowerCase() ? i : -1)).filter((i) => i > -1);
}

module.exports = findTheCapitals;
