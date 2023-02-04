const takeTest = require("./take");

test("Creates a slice of array with n elements taken from the beginning", () => {
  const arr = [1, 2, 3];
  expect(takeTest(arr, 1)).toEqual([1]);
  expect(takeTest(arr)).toEqual([1]);
  expect(takeTest(arr, 5)).toEqual(arr);
  expect(takeTest(arr, 3)).toEqual(arr);
  expect(takeTest(arr, 0)).toEqual([]);
  expect(takeTest("str", 2)).toEqual(undefined);
  expect(takeTest(arr, "str")).toEqual([]);
});
