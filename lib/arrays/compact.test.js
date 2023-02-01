const compactTest = require("./compact");

test("return array with all falsey values removed", () => {
  const arr = [0, 1, false, 2, "", [], 3, NaN, undefined, 4, null];
  const res = [1, 2, [], 3, 4];
  expect(compactTest(arr)).toEqual(res);
});

test("array is not array", () => {
  const arr = "str";
  expect(compactTest(arr)).toEqual(undefined);
});

test("empty array", () => {
  const arr = [];
  expect(compactTest(arr)).toEqual(arr);
});
