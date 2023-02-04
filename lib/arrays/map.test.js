const mapTest = require("./map");

test("Returns the new mapped array", () => {
  const data = [4, 8];
  const res = [16, 64];
  expect(mapTest.map(data, mapTest.square)).toEqual(res);

  const obj = { a: 4, b: 8 };
  expect(mapTest.map(obj, mapTest.square)).toEqual(res);

  const obj4 = { a: "hi", b: "hello" };
  const res4 = ["hi", "hello"];
  expect(mapTest.map(obj4, mapTest.square)).toEqual(res4);

  const obj2 = [
    { a: 4, b: 8 },
    { a: 2, b: 3 },
  ];
  const res2 = [16, 64, 4, 9];
  expect(mapTest.map(obj2, mapTest.square)).toEqual(res2);

  const users = [{ user: "barney" }, { user: "fred" }];
  const res3 = ["barney", "fred"];
  expect(mapTest.map(users, "user")).toEqual(res3);
});
