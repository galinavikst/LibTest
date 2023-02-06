const pick = (obj, path) => {
  if (typeof obj !== "object" || Array.isArray(obj))
    return "first arguments should be object";

  if (typeof path !== "string" && !Array.isArray(path)) {
    return "second argument should be array | string";
  }

  let res = {};
  if (Array.isArray(path)) {
    for (let el of path) {
      if (obj.hasOwnProperty(el)) res[el] = obj[el];
    }
  } else if (typeof path === "string") {
    if (obj.hasOwnProperty(path)) res[path] = obj[path];
  }
  return res;
};

module.exports = pick;
