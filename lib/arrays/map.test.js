const mapTest = require("./map");

function square(n) {
  return n * n;
}

test("Returns the new mapped array", () => {
  const data = [4, 8];
  const res = [16, 64];
  expect(mapTest(data, square)).toEqual(res);

  const obj = { a: 4, b: 8 };
  expect(mapTest(obj, square)).toEqual(res);

  const obj4 = { a: "hi", b: "hello" };
  const res4 = ["hi", "hello"];
  expect(mapTest(obj4, square)).toEqual(res4);

  const obj2 = [
    { a: 4, b: 8 },
    { a: 2, b: 3 },
  ];
  const res2 = [16, 64, 4, 9];
  expect(mapTest(obj2, square)).toEqual(res2);

  const users = [{ user: "barney" }, { user: "fred" }];
  const res3 = ["barney", "fred"];
  expect(mapTest(users, "user")).toEqual(res3);
});
