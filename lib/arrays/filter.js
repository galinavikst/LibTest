const filter = (arr, predicate) => {
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
};

module.exports = filter;
