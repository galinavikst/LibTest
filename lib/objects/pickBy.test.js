const pickByTest = require("./pickBy");
const func = require("./omitBy");

test("Creates an object composed of the object properties predicate returns truthy for", () => {
  const obj = { a: 1, b: "2", c: 3 };
  const res = { a: 1, c: 3 };
  expect(pickByTest(obj, func.isNumber)).toEqual(res);
  expect(pickByTest([6, 5], func.isNumber)).toEqual(
    "not correct types of arguments"
  );
});
