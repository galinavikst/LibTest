const dropWhileTest = require("./dropWhile");

const arr = [
  { user: "barney", active: false },
  { user: "fred", active: false },
  { user: "pebbles", active: true },
];

test("drop elements while value === part of elements", () => {
  const func = (o) => {
    return !o.active;
  };
  const res = [{ user: "pebbles", active: true }];
  expect(dropWhileTest(arr, func)).toEqual(res);
});

test("drop elements while value === part of elements , predicate is object", () => {
  const predicate = { user: "barney", active: false };
  const res = [
    { user: "fred", active: false },
    { user: "pebbles", active: true },
  ];
  expect(dropWhileTest(arr, predicate)).toEqual(res);
});

test("drop elements while value === part of elements , predicate is array of values", () => {
  const predicate = ["active", false];
  const res = [{ user: "pebbles", active: true }];
  expect(dropWhileTest(arr, predicate)).toEqual(res);
});

test("drop elements while value === part of elements , predicate has not correct type", () => {
  const predicate = "active";
  expect(dropWhileTest(arr, predicate)).toEqual(arr);
});
