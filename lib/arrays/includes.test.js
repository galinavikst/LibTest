const includesTest = require("./includes");
/*Checks if value is in collection. If collection is a string, it's checked for a substring of value,
otherwise SameValueZero is used for equality comparisons. 
If fromIndex is negative, it's used as the offset from the end of collection.
*/
test("Checks if value is in array collection", () => {
  const collection = [1, 2, 3];
  expect(includesTest(collection, 1)).toBeTruthy();
  const index = 2;
  expect(includesTest(collection, 1, index)).toBeFalsy();
  expect(includesTest(collection, 1, -1)).toBeFalsy();

  expect(includesTest({ a: 1, b: 2 }, 1)).toBeTruthy();

  expect(includesTest("abcd", "bc")).toBeTruthy();
  expect(includesTest("abcd", "ab", 2)).not.toBeTruthy();
  expect(includesTest("abcde", "ab", -3)).not.toBeTruthy();

  expect(includesTest(5, "ab")).toEqual(undefined);
});
