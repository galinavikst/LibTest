const find = (arr, predicate) => {
  switch (true) {
    case typeof predicate === "function":
      for (let el of arr) {
        if (predicate(el)) {
          return el;
        }
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
};

module.exports = find;
