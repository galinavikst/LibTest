const dropWhile = (arr, predicate) => {
  let res = [];
  let add = false;

  switch (true) {
    case typeof predicate === "function":
      for (let el of arr) {
        if (!predicate(el)) {
          res[res.length] = el;
        }
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
        if (el[keyP] !== valueP) {
          add = true;
        }
        if (add) res[res.length] = el;
      }
      return res;

    default:
      return arr;
  }
};

module.exports = dropWhile;
