const isNumber = (n) => typeof n === "number";

const omitBy = (obj, func) => {
  if (typeof obj !== "object" || Array.isArray(obj))
    return "not correct types of arguments";

  let res = {};
  for (let key in obj) {
    if (!func(obj[key])) res[key] = obj[key];
  }
  return res;
};

module.exports = {
  isNumber,
  omitBy,
};
