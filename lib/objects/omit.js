const omit = (obj, arr) => {
  if (!Array.isArray(arr) || (typeof obj === "object" && Array.isArray(obj))) {
    return "not correct types of arguments";
  }
  let res = {};
  for (let key in obj) {
    let add = true;
    for (let el of arr) {
      if (key === el) {
        add = false;
        break;
      }
    }
    if (add) res[key] = obj[key];
  }
  return res;
};

module.exports = omit;
