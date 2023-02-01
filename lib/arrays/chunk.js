const chunk = (arr, size) => {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 1 || isNaN(size) || size >= arr.length) return arr;
  let res = [];
  let chunk = [];
  for (let i = 0; i <= arr.length; i++) {
    chunk[chunk.length] = arr[i];
    if (chunk.length === size || i === arr.length - 1) {
      res[res.length] = chunk;
      chunk = [];
    }
  }
  return res;
};

module.exports = chunk;
