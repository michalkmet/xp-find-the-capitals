# Notes

Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

Pomodoro - 1: Michal Nav, Anna Driver
- ✅ Initial refactor
- 🚧 User stories

Pomodoro - 2: Martin Nav, Aljosa Driver
- ✅ User story 3
- ✅ UAT1.1 - User can pass "A", it should return [0]

Pomodoro - 3: Michal Driver, Anna Nav
- ✅ UAT1.2 - User can pass "a", it should return []
- ✅ UAT2.1 - User can pass "aA", it should return [1]
- 🚧 UAT2.2 - User can pass "aa", it should return []

Pomodoro - 4: Martin Driver, Aljosa Nav
- ✅  UAT2.2 - User can pass "aa", it should return []
- ✅  UAT2.3 - User can pass "CDE", it should return [0,1,2]
- ✅  UAT2.4 - User can pass "CdE", it should return [0,2]
- ✅  UAT2.5 - User can pass "cdE", it should return [2]

Pomodoro - 5: Anna Driver, Michal Nav
- ✅ UAT2.6 - User can pass "123", it should return []

## Work
