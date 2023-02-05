const merge = (obj, other) => {
  for (let i = 0; i < obj.a.length; i++) {
    let ob = obj.a[i];
    let oth = other.a[i];

    for (let key in oth) {
      if (oth.hasOwnProperty(key)) ob[key] = oth[key];
    }
  }
  return obj;
};

module.exports = merge;
