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

/*
function reduceFunction(arr, callback) {
  const reduced = [];
  for(let i = 0; i < arr.length; i++) {

  }
  return reduced;
}

*/
module.exports = {
  mapFunction,
  filterFunction
};
