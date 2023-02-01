const obj = require("./merge");

test("a+a", () => {
  expect(obj.add(2, 3)).toBe(5);
});
