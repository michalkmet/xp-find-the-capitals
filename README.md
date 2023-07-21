# Awesome repo

Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Backlog

Story1: User can pass 1 letter string, it should return index of capital or empty array
- ⚠ TODO UAT1.1 - User can pass 'A', it should return [0]
- ⚠ TODO UAT1.2 - User can pass 'a', it should return []

Story2: User can pass string, it should return index of capital
- ⚠ TODO UAT2.1 - User can pass 'aA', it should return [1]
- ⚠ TODO UAT2.2 - User can pass 'aa', it should return []
- ⚠ TODO UAT2.3 - User can pass 'CDE', it should return [0,1,2]
- ⚠ TODO UAT2.4 - User can pass 'CdE', it should return [0,2]
- ⚠ TODO UAT2.5 - User can pass 'cdE', it should return [2]
- ⚠ TODO UAT2.6 - User can pass '123', it should return []

Story3 (TechDebt): User can pass invalid input, it should throw an error
- ⚠ TODO UAT3.1 - User can pass 123, it should throw an error
- ⚠ TODO UAT3.2 - User can pass null, it should throw an error
- ⚠ TODO UAT3.1 - User can pass [1], it should throw an error