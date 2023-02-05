const chunkTest = require("./chunk");

const arr = ["a", "b", "c", "d"];

test("return array splited by groups with the length of size", () => {
  const res = [
    ["a", "b"],
    ["c", "d"],
  ];
  expect(chunkTest(arr, 2)).toEqual(res);
  expect(chunkTest([], 2)).toEqual([]);
  expect(chunkTest(["a"], 2)).toEqual(["a"]);
  expect(chunkTest("str", 2)).toEqual(undefined);
  expect(chunkTest(arr, "str")).toEqual(arr);
  expect(chunkTest(arr, 6)).toEqual(arr);
  expect(chunkTest(arr, 4)).toEqual(arr);
});

test("If array cannot be split evenly, the final chunk will be the remaining elements", () => {
  const res = [["a", "b", "c"], ["d"]];
  expect(chunkTest(arr, 3)).toEqual(res);
});
