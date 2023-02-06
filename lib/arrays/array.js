const array = {
  chunk: (arr, size) => {
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
  },

  compact: (arr) => {
    if (!Array.isArray(arr)) return undefined;
    if (arr.length === 0) return arr;
    let res = [];
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i]) res[res.length] = arr[i];
    }
    return res;
  },

  drop: (arr, num = 1) => {
    let res = [];
    if (!Array.isArray(arr)) return undefined;
    if (isNaN(num) || num === 0) return arr;
    if (num >= arr.length) return res;
    for (let i = 0; i < arr.length; i++) {
      if (i >= num) res[res.length] = arr[i];
    }
    return res;
  },

  dropWhile: (arr, predicate) => {
    let res = [];
    let add = false;

    switch (true) {
      case typeof predicate === "function":
        for (let el of arr) {
          if (!predicate(el)) res[res.length] = el;
        }
        return res;

      case typeof predicate === "object" && !Array.isArray(predicate):
        for (let el of arr) {
          add = false;
          for (let keyP in predicate) {
            if (predicate[keyP] !== el[keyP]) {
              add = true;
              break;
            }
          }
          if (add) res[res.length] = el;
        }
        return res;

      case Array.isArray(predicate):
        const keyP = predicate[0];
        const valueP = predicate[1];
        for (let el of arr) {
          add = false;
          if (el[keyP] !== valueP) add = true;
          if (add) res[res.length] = el;
        }
        return res;

      default:
        return arr;
    }
  },

  filter: (arr, predicate) => {
    let res = [];
    let add;
    switch (true) {
      case typeof predicate === "function":
        for (let el of arr) {
          if (predicate(el)) {
            res[res.length] = el;
          }
        }
        return res;

      case typeof predicate === "object" && !Array.isArray(predicate):
        for (let el of arr) {
          add = true;
          for (let key in predicate) {
            if (el[key] !== predicate[key]) {
              add = false;
            }
          }
          if (add) res[res.length] = el;
        }
        return res;

      case Array.isArray(predicate):
        const key = predicate[0];
        const value = predicate[1];
        for (let el of arr) {
          add = true;
          if (el[key] !== value) {
            add = false;
          }
          if (add) res[res.length] = el;
        }
        return res;

      default:
        for (let el of arr) {
          if (el[predicate]) {
            res[res.length] = el;
          }
        }
        return res;
    }
  },

  find: (arr, predicate) => {
    switch (true) {
      case typeof predicate === "function":
        for (let el of arr) {
          if (predicate(el)) return el;
        }
        return undefined;

      case typeof predicate === "object" && !Array.isArray(predicate):
        for (let el of arr) {
          let add = true;
          for (let key in predicate) {
            if (el[key] !== predicate[key]) add = false;
          }
          if (add) return el;
        }
        return undefined;

      case Array.isArray(predicate):
        const key = predicate[0];
        const value = predicate[1];
        for (let el of arr) {
          if (el[key] === value) return el;
        }
        return undefined;

      case typeof predicate === "string":
        for (let el of arr) {
          if (el[predicate]) return el;
        }
        return undefined;

      default:
        return "not correct type of predicate";
    }
  },

  includes: (coll, value, index = 0) => {
    let i = index;

    switch (true) {
      case Array.isArray(coll):
        if (index < 0) i = coll.length - index;
        while (i < coll.length) {
          if (coll[i] === value) return true;
          i++;
        }
        return false;

      case typeof coll === "object" && !Array.isArray(coll):
        for (let key in coll) {
          if (coll[key] === value) return true;
        }
        return false;

      case typeof coll === "string":
        if (index < 0) i = coll.length - index;
        let res = "";
        while (i < coll.length) {
          for (let j = 0; j < value.length; j++) {
            if (coll[i + j] !== value[j]) {
              res = "";
              break;
            }
            if (coll[i + j] === value[j]) {
              res += value[j];
              if (res === value) return true;
            }
          }
          i++;
        }
        return false;

      default:
        return undefined;
    }
  },

  map: (data, func) => {
    let res = [];

    switch (true) {
      case Array.isArray(data):
        data.forEach((el) => {
          if (typeof el === "number") res[res.length] = func(el);
          else if (typeof el === "object" && !Array.isArray(el)) {
            for (let key in el) {
              if (typeof el[key] !== "number") res[res.length] = el[key];
              else res[res.length] = func(el[key]);
            }
          }
        });
        return res;

      case typeof data === "object" && !Array.isArray(data):
        for (let key in data) {
          if (typeof data[key] !== "number") res[res.length] = data[key];
          else res[res.length] = func(data[key]);
        }
        return res;

      default:
        return undefined;
    }
  },

  take: (arr, num = 1) => {
    let res = [];
    if (!Array.isArray(arr)) return undefined;
    if (isNaN(num) || num === 0) return res;
    if (num >= arr.length) return arr;

    for (let i = 0; i < num; i++) res[res.length] = arr[i];

    return res;
  },

  zip: (arr) => {
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
  },
};

module.exports = array;
