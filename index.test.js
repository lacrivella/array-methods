const { 
  mapFunction, 
  filterFunction, 
  findIndex,
  reduceFunction
} = require('./index');

//mapFunction
it('doubles array', () => {
  const arr = [1, 2, 3, 4];
  const double = mapFunction(arr, arr => arr * 2);
  expect(double).toEqual([2, 4, 6, 8]);
});
//filterFunction
it('filters array', () => {
  const numbers = [1, 2, 3, 4];
  const onlyEvens = filterFunction(numbers, number => number % 2 === 0);
  expect(onlyEvens).toEqual([2, 4]);
});
//findIndex
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

//reduceFunction
it('iterates through array and invokes the callback', () => {
  const numbers = [1, 2, 3];
  const callback = jest.fn();

  reduceFunction(numbers, callback);

  expect(callback).toHaveBeenCalledTimes(numbers.length);
});

it('iterates through array and sets acc', () => {
  const numbers = [1, 2, 3];
  const sum = reduceFunction(numbers, (acc, item) => acc + item, 0);

  expect(sum).toEqual(6);
});

//