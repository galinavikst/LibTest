const chunkTest = require("./chunk");

test("return array splited by groups with the length of size", () => {
  const arr = ["a", "b", "c", "d"];
  const res = [
    ["a", "b"],
    ["c", "d"],
  ];
  expect(chunkTest(arr, 2)).toEqual(res);
});

test("If array cannot be split evenly, the final chunk will be the remaining elements", () => {
  const arr = ["a", "b", "c", "d"];
  const res = [["a", "b", "c"], ["d"]];
  expect(chunkTest(arr, 3)).toEqual(res);
});

test("empty array", () => {
  const array = [];
  expect(chunkTest(array, 3)).toEqual(array);
});

test("array.length === 1", () => {
  const array = ["a"];
  expect(chunkTest(array, 2)).toEqual(array);
});

test("array is not array", () => {
  const array = "str";
  expect(chunkTest(array, 5)).toEqual(undefined);
});

test("size is not number", () => {
  const array = ["a", "b"];
  expect(chunkTest(array, "str")).toEqual(array);
});

test("size > arr.length", () => {
  const array = ["a", "b"];
  expect(chunkTest(array, 3)).toEqual(array);
});

test("size === arr.length", () => {
  const array = ["a", "b"];
  expect(chunkTest(array, 2)).toEqual(array);
});
