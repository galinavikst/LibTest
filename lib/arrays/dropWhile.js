const dropWhile = (arr, predicate) => {
  let res = [];
  let add = false;

  switch (true) {
    case typeof predicate === "function":
      for (let i = 0; i < arr.length; i++) {
        if (!predicate(arr[i])) {
          res[res.length] = arr[i];
        }
      }
      return res;

    case typeof predicate === "object" && !Array.isArray(predicate):
      const predicateKeys = Object.keys(predicate);
      for (let i = 0; i < arr.length; i++) {
        add = false;
        for (let keyP of predicateKeys) {
          if (predicate[keyP] !== arr[i][keyP]) {
            add = true;
            break;
          }
        }
        if (add) res[res.length] = arr[i];
      }
      return res;

    case Array.isArray(predicate):
      const keyP = predicate[0];
      const valueP = predicate[1];
      for (let i = 0; i < arr.length; i++) {
        add = false;
        if (arr[i][keyP] !== valueP) {
          add = true;
        }
        if (add) res[res.length] = arr[i];
      }
      return res;

    default:
      return arr;
  }
};

module.exports = dropWhile;
