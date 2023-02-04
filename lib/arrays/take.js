const take = (arr, num = 1) => {
  let res = [];
  if (!Array.isArray(arr)) return undefined;
  if (isNaN(num) || num === 0) return res;
  if (num >= arr.length) return arr;

  for (let i = 0; i < num; i++) res[res.length] = arr[i];

  return res;
};

module.exports = take;
