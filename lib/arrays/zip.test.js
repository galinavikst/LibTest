const zipTest = require("./zip");

test("Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.", () => {
  const arr = [
    ["a", "b"],
    [1, 2],
    [true, false],
  ];
  const res = [
    ["a", 1, true],
    ["b", 2, false],
  ];
  expect(zipTest(arr)).toEqual(res);
  expect(zipTest(["a", "b"])).toEqual(["a", "b"]);
  expect(zipTest([])).toEqual([]);
  expect(zipTest({ a: 2 })).toEqual("not correct type of arguments");
});
