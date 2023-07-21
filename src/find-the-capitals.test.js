const findTheCapitals = require('./find-the-capitals');

describe('Story1: User can pass 1 letter string, it should return index of capital or empty array', () => {
  it('UAT1.1 - User can pass "A", it should return [0]', () => {
    expect(findTheCapitals('A')).toStrictEqual([0]);
  });
});
