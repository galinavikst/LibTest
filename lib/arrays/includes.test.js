const includesTest = require("./includes");
/*Checks if value is in collection. If collection is a string, it's checked for a substring of value,
otherwise SameValueZero is used for equality comparisons. 
If fromIndex is negative, it's used as the offset from the end of collection.
*/
test("Checks if value is in array collection", () => {
  const collection = [1, 2, 3];
  const value = 1;
  expect(includesTest(collection, value)).toBeTruthy();
});

test("if index passed to array collection", () => {
  const collection = [1, 2, 3];
  const value = 1;
  const index = 2;
  expect(includesTest(collection, value, index)).toBeFalsy();
});

test("if -index passed to array collection", () => {
  const collection = [1, 2, 3];
  const value = 1;
  const index = -1;
  expect(includesTest(collection, value, index)).toBeFalsy();
});

test("collection is object", () => {
  const collection = { a: 1, b: 2 };
  const value = 1;
  expect(includesTest(collection, value)).toBeTruthy();
});

test("collection is string", () => {
  const collection = "abcd";
  const value = "bc";
  expect(includesTest(collection, value)).toBeTruthy();
});

test("collection is string with passed positive index or 0", () => {
  const collection = "abcd";
  const value = "ab";
  expect(includesTest(collection, value, 2)).not.toBeTruthy();
});

test("collection is string with passed -index", () => {
  const collection = "abcde";
  const value = "ab";
  expect(includesTest(collection, value, -3)).not.toBeTruthy();
});

test("collection is not string, array or object", () => {
  const collection = 5;
  const value = "ab";
  expect(includesTest(collection, value)).toEqual(undefined);
});
