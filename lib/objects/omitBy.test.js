const omitByTest = require("./omitBy");

test("creates new object with unique properties", () => {
  const object = { a: 1, b: "2", c: 3 };
  const res = { b: "2" };
  expect(omitByTest.omitBy(object, omitByTest.isNumber)).toEqual(res);
  expect(omitByTest.omitBy([6, 5], omitByTest.isNumber)).toEqual(
    "not correct types of arguments"
  );
});
