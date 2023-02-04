const map = (data, func) => {
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
};

module.exports = map;
