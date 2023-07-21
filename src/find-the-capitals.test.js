const findTheCapitals = require('./find-the-capitals');

describe('Story1: User can pass 1 letter string, it should return index of capital or empty array', () => {
  it('UAT1.1 - User can pass "A", it should return [0]', () => {
    expect(findTheCapitals('A')).toStrictEqual([0]);
  });
  it('UAT1.2 - User can pass "a", it should return []', () => {
    expect(findTheCapitals('a')).toStrictEqual([]);
  });
});

describe('Story2: User can pass string, it should return index of capital', () => {
  it('UAT2.1 - User can pass "aA", it should return [1]', () => {
    expect(findTheCapitals('aA')).toStrictEqual([1]);
  });
  it('UAT2.2 - User can pass "aa", it should return []', () => {
    expect(findTheCapitals('aa')).toStrictEqual([]);
  });
  it('UAT2.3 - User can pass "CDE", it should return [0,1,2]', () => {
    expect(findTheCapitals('CDE')).toStrictEqual([0,1,2]);
  });
});
