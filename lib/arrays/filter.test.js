const filterTest = require("./filter");

const users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
  { user: "pebbles", age: 36, active: false },
];

test("return an array of all elements predicate(function) returns truthy for ", () => {
  const predicate = function (o) {
    return !o.active;
  };
  const res = [
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 36, active: false },
  ];
  expect(filterTest(users, predicate)).toEqual(res);
});

test("return an array of all elements predicate(object) returns truthy for ", () => {
  const predicate = { age: 36, active: true };
  const res = [{ user: "barney", age: 36, active: true }];
  expect(filterTest(users, predicate)).toEqual(res);
});

test("return an array of all elements predicate(array) returns truthy for ", () => {
  const predicate = ["active", false];
  const res = [
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 36, active: false },
  ];
  expect(filterTest(users, predicate)).toEqual(res);
});

test("return an array of all elements predicate(string) returns truthy for ", () => {
  const predicate = "active";
  const res = [{ user: "barney", age: 36, active: true }];
  expect(filterTest(users, predicate)).toEqual(res);
});
