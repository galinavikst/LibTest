const drop = (arr, num = 1) => {
  let res = [];
  if (!Array.isArray(arr)) return undefined;
  if (isNaN(num) || num === 0) return arr;
  if (num >= arr.length) return res;
  for (let i = 0; i < arr.length; i++) {
    if (i >= num) res[res.length] = arr[i];
  }
  return res;
};

module.exports = drop;
