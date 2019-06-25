const { mapFunction, filterFunction, findIndex } = require('./index');

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

it('findIndex returns a number', () => {
  const colors = ['red', 'blue', 'green'];
  const index = findIndex(colors, color => color.includes('l'));
  expect(index).toEqual(expect.any(Number));
});

it('returns index', () => {
  const colors = ['red', 'blue', 'green'];
  const index = findIndex(colors, color => color.includes('l'));
  expect(index).toEqual(1);
});

it('returns index', () => {
  const colors = ['red', 'blue', 'green'];
  const index = findIndex(colors, color => color.includes('s'));
  expect(index).toEqual(-1);
});