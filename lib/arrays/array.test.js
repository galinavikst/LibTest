const array = require("./array");

const square = (n) => n * n;

//chunk
test("return array splited by groups with the length of size. If array cannot be split evenly, the final chunk will be the remaining elements", () => {
  const arr = ["a", "b", "c", "d"];
  const res = [
    ["a", "b"],
    ["c", "d"],
  ];
  expect(array.chunk(arr, 2)).toEqual(res);
  expect(array.chunk([], 2)).toEqual([]);
  expect(array.chunk(["a"], 2)).toEqual(["a"]);
  expect(array.chunk("str", 2)).toEqual(undefined);
  expect(array.chunk(arr, "str")).toEqual(arr);
  expect(array.chunk(arr, 6)).toEqual(arr);
  expect(array.chunk(arr, 4)).toEqual(arr);

  const res2 = [["a", "b", "c"], ["d"]];
  expect(array.chunk(arr, 3)).toEqual(res2);
});

//compact
test("return array with all falsey values removed", () => {
  const arr = [0, 1, false, 2, "", [], 3, NaN, undefined, 4, null];
  const res = [1, 2, [], 3, 4];
  expect(array.compact(arr)).toEqual(res);
});

test("empty array or is not array", () => {
  expect(array.compact("str")).toEqual(undefined);
  expect(array.compact([])).toEqual([]);
});

//drop
test("Creates a slice of array with num elements dropped from the beginning", () => {
  expect(array.drop([1, 2, 3], 2)).toEqual([3]);
});

test("array is not array, or num is not num", () => {
  expect(array.drop("str", 2)).toEqual(undefined);
  expect(array.drop([1, 2, 3], "str")).toEqual([1, 2, 3]);
});

test("num is not passed to function as an argument", () => {
  expect(array.drop([1, 2, 3])).toEqual([2, 3]);
});

test("num === 0, or num => arr.length", () => {
  expect(array.drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
  expect(array.drop([1, 2, 3], 3)).toEqual([]);
  expect(array.drop([1, 2, 3], 5)).toEqual([]);
});

//dropWhile
const arrOfObjects = [
  { user: "barney", active: false },
  { user: "fred", active: false },
  { user: "pebbles", active: true },
];

test("drop elements while value === part of elements", () => {
  const func = (o) => {
    return !o.active;
  };
  const res = [{ user: "pebbles", active: true }];
  expect(array.dropWhile(arrOfObjects, func)).toEqual(res);
});

test("drop elements while value === part of elements , predicate is object", () => {
  const predicate = { user: "barney", active: false };
  const res = [
    { user: "fred", active: false },
    { user: "pebbles", active: true },
  ];
  expect(array.dropWhile(arrOfObjects, predicate)).toEqual(res);
});

test("drop elements while value === part of elements , predicate is array of values", () => {
  const predicate = ["active", false];
  const res = [{ user: "pebbles", active: true }];
  expect(array.dropWhile(arrOfObjects, predicate)).toEqual(res);
});

test("drop elements while value === part of elements , predicate has not correct type", () => {
  const predicate = "active";
  expect(array.dropWhile(arrOfObjects, predicate)).toEqual(arrOfObjects);
});

//filter
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
  expect(array.filter(users, predicate)).toEqual(res);
});

test("return an array of all elements predicate(object) returns truthy for ", () => {
  const predicate = { age: 36, active: true };
  const res = [{ user: "barney", age: 36, active: true }];
  expect(array.filter(users, predicate)).toEqual(res);
});

test("return an array of all elements predicate(array) returns truthy for ", () => {
  const predicate = ["active", false];
  const res = [
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 36, active: false },
  ];
  expect(array.filter(users, predicate)).toEqual(res);
});

test("return an array of all elements predicate(string) returns truthy for ", () => {
  const predicate = "active";
  const res = [{ user: "barney", age: 36, active: true }];
  expect(array.filter(users, predicate)).toEqual(res);
});

//find
const users2 = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
  { user: "pebbles", age: 1, active: true },
  { user: "tom", age: 1, active: true },
];

test("returning the first element predicate(function) returns truthy for or undefined", () => {
  const predicate = (o) => o.age < 40;
  const res = { user: "barney", age: 36, active: true };
  expect(array.find(users2, predicate)).toEqual(res);

  const predicate2 = (o) => o.age > 40;
  expect(array.find(users2, predicate2)).toBe(undefined);
});

test("returning the first element predicate(object) returns truthy for or undefined", () => {
  const predicate = { age: 1, active: true };
  const res = { user: "pebbles", age: 1, active: true };
  expect(array.find(users2, predicate)).toEqual(res);
  expect(array.find(users2, { a: 8 })).toBe(undefined);
});

test("returning the first element predicate(array) returns truthy for or undefined", () => {
  const predicate = ["active", false];
  const res = { user: "fred", age: 40, active: false };
  expect(array.find(users2, predicate)).toEqual(res);
  expect(array.find(users2, ["b", true])).toBe(undefined);
});

test("returning the first element predicate(string) returns truthy for or undefined", () => {
  const predicate = "active";
  const res = { user: "barney", age: 36, active: true };
  expect(array.find(users2, predicate)).toEqual(res);
  expect(array.find(users2, "a")).toBe(undefined);

  expect(array.find(users2, 2)).toBe("not correct type of predicate");
});

//includes
/*Checks if value is in collection. If collection is a string, it's checked for a substring of value,
otherwise SameValueZero is used for equality comparisons. 
If fromIndex is negative, it's used as the offset from the end of collection.
*/
test("Checks if value is in array collection", () => {
  const collection = [1, 2, 3];
  expect(array.includes(collection, 1)).toBeTruthy();
  const index = 2;
  expect(array.includes(collection, 1, index)).toBeFalsy();
  expect(array.includes(collection, 1, -1)).toBeFalsy();

  expect(array.includes({ a: 1, b: 2 }, 1)).toBeTruthy();

  expect(array.includes("abcd", "bc")).toBeTruthy();
  expect(array.includes("abcd", "ab", 2)).not.toBeTruthy();
  expect(array.includes("abcde", "ab", -3)).not.toBeTruthy();

  expect(array.includes(5, "ab")).toEqual(undefined);
});

//map
test("Returns the new mapped array", () => {
  const data = [4, 8];
  const res = [16, 64];
  expect(array.map(data, square)).toEqual(res);

  const obj = { a: 4, b: 8 };
  expect(array.map(obj, square)).toEqual(res);

  const obj4 = { a: "hi", b: "hello" };
  const res4 = ["hi", "hello"];
  expect(array.map(obj4, square)).toEqual(res4);

  const obj2 = [
    { a: 4, b: 8 },
    { a: 2, b: 3 },
  ];
  const res2 = [16, 64, 4, 9];
  expect(array.map(obj2, square)).toEqual(res2);

  const users = [{ user: "barney" }, { user: "fred" }];
  const res3 = ["barney", "fred"];
  expect(array.map(users, "user")).toEqual(res3);
});

//take
test("Creates a slice of array with n elements taken from the beginning", () => {
  const arr = [1, 2, 3];
  expect(array.take(arr, 1)).toEqual([1]);
  expect(array.take(arr)).toEqual([1]);
  expect(array.take(arr, 5)).toEqual(arr);
  expect(array.take(arr, 3)).toEqual(arr);
  expect(array.take(arr, 0)).toEqual([]);
  expect(array.take("str", 2)).toEqual(undefined);
  expect(array.take(arr, "str")).toEqual([]);
});

//zip
test("Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.", () => {
  const arr = [
    ["a", "b"],
    [1, 2],
    [true, false],
  ];
  const res = [
    ["a", 1, true],
    ["b", 2, false],
  ];
  expect(array.zip(arr)).toEqual(res);
  expect(array.zip(["a", "b"])).toEqual(["a", "b"]);
  expect(array.zip([])).toEqual([]);
  expect(array.zip({ a: 2 })).toEqual("not correct type of arguments");
});
