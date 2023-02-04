const findTest = require("./find");

const users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
  { user: "pebbles", age: 1, active: true },
  { user: "tom", age: 1, active: true },
];

test("returning the first element predicate(function) returns truthy for or undefined", () => {
  const predicate = function (o) {
    return o.age < 40;
  };
  const res = { user: "barney", age: 36, active: true };
  expect(findTest(users, predicate)).toEqual(res);

  const predicate2 = function (o) {
    return o.age > 40;
  };
  expect(findTest(users, predicate2)).toBe(undefined);
});

test("returning the first element predicate(object) returns truthy for or undefined", () => {
  const predicate = { age: 1, active: true };
  const res = { user: "pebbles", age: 1, active: true };
  expect(findTest(users, predicate)).toEqual(res);
  expect(findTest(users, { a: 8 })).toBe(undefined);
});

test("returning the first element predicate(array) returns truthy for or undefined", () => {
  const predicate = ["active", false];
  const res = { user: "fred", age: 40, active: false };
  expect(findTest(users, predicate)).toEqual(res);
  expect(findTest(users, ["b", true])).toBe(undefined);
});

test("returning the first element predicate(string) returns truthy for or undefined", () => {
  const predicate = "active";
  const res = { user: "barney", age: 36, active: true };
  expect(findTest(users, predicate)).toEqual(res);
  expect(findTest(users, "a")).toBe(undefined);
});

test("returning the first element predicate(string) returns truthy for or undefined", () => {
  expect(findTest(users, 2)).toBe("not correct type of predicate");
});
