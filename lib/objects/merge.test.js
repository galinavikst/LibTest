const mergeTest = require("./merge");

test("merges own and inherited enumerable string keyed properties of source objects into the destination object", () => {
  const obj = {
    a: [{ b: 2 }, { d: 4 }],
  };
  const other = {
    a: [{ c: 3 }, { e: 5 }],
  };
  const res = {
    a: [
      { b: 2, c: 3 },
      { d: 4, e: 5 },
    ],
  };
  expect(mergeTest(obj, other)).toEqual(res);
});
