const object = require("./object");

const isNumber = (n) => typeof n === "number";

//merge
test("merges own and inherited enumerable string keyed properties of source objects into the destination object", () => {
  const obj = {
    a: [{ b: 2 }, { d: 4 }],
  };
  const other = {
    a: [{ c: 3 }, { e: 5 }],
  };
  const res = {
    a: [
      { b: 2, c: 3 },
      { d: 4, e: 5 },
    ],
  };
  expect(object.merge(obj, other)).toEqual(res);
});

//omit
test("creates new object with unique properties", () => {
  const obj = { a: 1, b: "2", c: 3 };
  const arr = ["a", "c"];
  const res = { b: "2" };
  expect(object.omit(obj, arr)).toEqual(res);
  expect(object.omit(arr, obj)).toEqual("not correct types of arguments");
});

//omitBy
test("creates new object with unique properties", () => {
  const obj = { a: 1, b: "2", c: 3 };
  const res = { b: "2" };
  expect(object.omitBy(obj, isNumber)).toEqual(res);
  expect(object.omitBy([6, 5], isNumber)).toEqual(
    "not correct types of arguments"
  );
});

//pick
test("Creates an object composed of the picked object properties.", () => {
  const obj = { a: 1, b: "2", c: 3 };
  const path = ["a", "c"];
  const res = { a: 1, c: 3 };
  expect(object.pick(obj, path)).toEqual(res);
  expect(object.pick(path, obj)).toEqual("first arguments should be object");
  expect(object.pick(obj, 2)).toEqual(
    "second argument should be array | string"
  );
  expect(object.pick(obj, ["p", "d"])).toEqual({});
  expect(object.pick(obj, [1, 2])).toEqual({});
  expect(object.pick(obj, "a")).toEqual({ a: 1 });
});

//pickBy
test("Creates an object composed of the object properties predicate returns truthy for", () => {
  const obj = { a: 1, b: "2", c: 3 };
  const res = { a: 1, c: 3 };
  expect(object.pickBy(obj, isNumber)).toEqual(res);
  expect(object.pickBy([6, 5], isNumber)).toEqual(
    "not correct types of arguments"
  );
});

//toPair
test("Returns array of the key-value pairs.", () => {
  function Entries() {
    this.a = 1;
    this.b = 2;
  }
  const res = [
    ["a", 1],
    ["b", 2],
  ];
  expect(object.toPair(new Entries())).toEqual(res);
});
