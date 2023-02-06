const pickTest = require("./pick");
test("Creates an object composed of the picked object properties.", () => {
  const obj = { a: 1, b: "2", c: 3 };
  const path = ["a", "c"];
  const res = { a: 1, c: 3 };
  expect(pickTest(obj, path)).toEqual(res);
  expect(pickTest(path, obj)).toEqual("first arguments should be object");
  expect(pickTest(obj, 2)).toEqual("second argument should be array | string");
  expect(pickTest(obj, ["p", "d"])).toEqual({});
  expect(pickTest(obj, [1, 2])).toEqual({});
  expect(pickTest(obj, "a")).toEqual({ a: 1 });
});
