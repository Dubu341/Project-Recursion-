const fibonacci = require("./fibonacci.js");

test("fibonacci", () => {
  expect(fibonacci(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

test("fibonacci 2", () => {
  expect(fibonacci(13)).toStrictEqual([
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,
  ]);
});
