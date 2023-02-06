const object = {
  merge: (obj, other) => {
    for (let i = 0; i < obj.a.length; i++) {
      let ob = obj.a[i];
      let oth = other.a[i];

      for (let key in oth) {
        if (oth.hasOwnProperty(key)) ob[key] = oth[key];
      }
    }
    return obj;
  },

  omit: (obj, arr) => {
    if (
      !Array.isArray(arr) ||
      (typeof obj === "object" && Array.isArray(obj))
    ) {
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
  },

  omitBy: (obj, func) => {
    if (typeof obj !== "object" || Array.isArray(obj))
      return "not correct types of arguments";

    let res = {};
    for (let key in obj) {
      if (!func(obj[key])) res[key] = obj[key];
    }
    return res;
  },

  pick: (obj, path) => {
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
  },

  pickBy: (obj, func) => {
    if (typeof obj !== "object" || Array.isArray(obj))
      return "not correct types of arguments";

    let res = {};
    for (let key in obj) {
      if (func(obj[key])) res[key] = obj[key];
    }
    return res;
  },

  toPair: (obj) => Object.entries(obj),
};

module.exports = object;
