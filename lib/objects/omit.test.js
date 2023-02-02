const omitTest = require("./omit");

test("creates new object with unique properties", () => {
  const object = { a: 1, b: "2", c: 3 };
  const arr = ["a", "c"];
  const res = { b: "2" };
  expect(omitTest(object, arr)).toEqual(res);
});

test("creates new object with unique properties, wrong types of arguments", () => {
  const object = ["a", "c"];
  const arr = { a: 1, b: "2", c: 3 };
  const res = "not correct types of arguments";
  expect(omitTest(object, arr)).toEqual(res);
});
