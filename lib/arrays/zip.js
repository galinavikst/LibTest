const zip = (arr) => {
  if (!Array.isArray(arr)) return "not correct type of arguments";
  if (arr.length === 0) return [];
  for (let el of arr) {
    if (!Array.isArray(el)) return arr;
  }

  let res = Array();
  for (let i = 0; i < arr[0].length; i++) {
    res[i] = [];
    for (let j = 0; j < arr.length; j++) {
      res[i][j] = arr[j][i];
    }
  }
  return res;
};

module.exports = zip;
