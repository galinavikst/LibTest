const dropTest = require("./drop");

const arr = [1, 2, 3];

test("Creates a slice of array with num elements dropped from the beginning", () => {
  expect(dropTest(arr, 2)).toEqual([3]);
});

test("array is not array, or num is not num", () => {
  expect(dropTest("str", 2)).toEqual(undefined);
  expect(dropTest(arr, "str")).toEqual(arr);
});

test("num is not passed to function as an argument", () => {
  expect(dropTest(arr)).toEqual([2, 3]);
});

test("num === 0, or num => arr.length", () => {
  expect(dropTest(arr, 0)).toEqual(arr);
  expect(dropTest(arr, 3)).toEqual([]);
  expect(dropTest(arr, 5)).toEqual([]);
});
