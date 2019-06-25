const { mapFunction } = require('./index');

it('doubles array', () => {
  const arr = [1, 2, 3, 4];
  const double = mapFunction(arr, arr => arr * 2);
  expect(double).toEqual([2, 4, 6, 8]);
});
