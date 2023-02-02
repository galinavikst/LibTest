const includes = (coll, value, index = 0) => {
  switch (true) {
    case Array.isArray(coll):
      let i = index;
      if (index < 0) {
        i = coll.length - index;
      }
      while (i < coll.length) {
        if (coll[i] === value) return true;
        i++;
      }
      return false;

    case typeof coll === "object" && !Array.isArray(coll):
      {
        for (let key in coll) {
          if (coll[key] === value) return true;
        }
      }
      return false;

    case typeof coll === "string": {
      let i = index;
      if (index < 0) {
        i = coll.length - index;
      }
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
    }
    default:
      return undefined;
  }
};

module.exports = includes;
