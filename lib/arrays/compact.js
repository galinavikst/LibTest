const compact = (arr) => {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return arr;
  let res = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i]) {
      res[res.length] = arr[i];
    }
  }
  return res;
};

module.exports = compact;
