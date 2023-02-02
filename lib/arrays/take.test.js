const takeTest = require("./take");

test("Creates a slice of array with n elements taken from the beginning", () => {
  const arr = [1, 2, 3];
  const res = [1];
  expect(takeTest(arr, 1)).toEqual(res);
});

test("num is not passed as argument", () => {
  const arr = [1, 2, 3];
  const res = [1];
  expect(takeTest(arr)).toEqual(res);
});

test("num > arr.length", () => {
  const arr = [1, 2, 3];
  expect(takeTest(arr, 5)).toEqual(arr);
});

test("num = arr.length", () => {
  const arr = [1, 2, 3];
  expect(takeTest(arr, 3)).toEqual(arr);
});

test("num === 0", () => {
  const arr = [1, 2, 3];
  expect(takeTest(arr, 0)).toEqual([]);
});

test("array is not array", () => {
  const arr = "str";
  expect(takeTest(arr, 2)).toEqual(undefined);
});

test("num is not num", () => {
  const arr = [1, 2, 3];
  const num = "str";
  expect(takeTest(arr, num)).toEqual([]);
});
