const { mapFunction, filterFunction } = require('./index');

it('doubles array', () => {
  const arr = [1, 2, 3, 4];
  const double = mapFunction(arr, arr => arr * 2);
  expect(double).toEqual([2, 4, 6, 8]);
});

it('filters array', () => {
  const numbers = [1, 2, 3, 4];
  const onlyEvens = filterFunction(numbers, number => number % 2 === 0);
  expect(onlyEvens).toEqual([2, 4]);
});
