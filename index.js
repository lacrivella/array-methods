function mapFunction(arr, callback) {
  const mapped = [];
  for(let i = 0; i < arr.length; i++) {
    mapped[i] = callback(arr[i]);
  }
  return mapped;
}

function filterFunction(arr, callback) {
  const filtered = [];
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) {
      filtered[filtered.length] = arr[i];
    }
  }
  return filtered;
}

function findIndex(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) return i;
  }
  return -1;
}

function reduceFunction(arr, callback, initalValue) {
  let acc = initalValue;
  let i = 0;

  if(initalValue === undefined) {
    acc = arr[0];
    i = 1;
  }

  for(i; i < arr.length; i++) {
    acc = callback(acc, arr[i]);
  }
  return acc;
}

module.exports = {
  mapFunction,
  filterFunction,
  findIndex,
  reduceFunction,
};
