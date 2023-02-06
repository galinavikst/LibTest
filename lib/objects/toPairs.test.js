const toPairTest = require("./toPairs");

test("Returns array of the key-value pairs.", () => {
  function Entries() {
    this.a = 1;
    this.b = 2;
  }
  const res = [
    ["a", 1],
    ["b", 2],
  ];
  expect(toPairTest(new Entries())).toEqual(res);
});
