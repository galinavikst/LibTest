const dropTest = require("./drop");

test("Creates a slice of array with num elements dropped from the beginning", () => {
  const arr = [1, 2, 3];
  const res = [3];
  expect(dropTest(arr, 2)).toEqual(res);
});

test("array is not array", () => {
  const arr = "str";
  expect(dropTest(arr, 2)).toEqual(undefined);
});

test("num is not num", () => {
  const arr = [1, 2, 3];
  const num = "str";
  expect(dropTest(arr, num)).toEqual(arr);
});

test("num is not passed to function as an argument", () => {
  const arr = [1, 2, 3];
  const res = [2, 3];
  expect(dropTest(arr)).toEqual(res);
});

test("num === 0", () => {
  const arr = [1, 2, 3];
  expect(dropTest(arr, 0)).toEqual(arr);
});

test("num = arr.length", () => {
  const arr = [1, 2, 3];
  res = [];
  expect(dropTest(arr, 5)).toEqual(res);
});

test("num > arr.length", () => {
  const arr = [1, 2, 3];
  res = [];
  expect(dropTest(arr, 5)).toEqual(res);
});
