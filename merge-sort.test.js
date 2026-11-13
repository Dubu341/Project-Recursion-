const mergeSort = require("./merge-sort.js");

test("empty array", () => {
  expect(mergeSort([])).toStrictEqual([]);
});

test("One item", () => {
  expect(mergeSort([73])).toStrictEqual([73]);
});

test("Sorted array", () => {
  expect(mergeSort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
});

test("sort array with duplicate", () => {
  expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toStrictEqual([
    0, 1, 1, 2, 3, 5, 8, 13,
  ]);
});

test("Sort array", () => {
  expect(mergeSort([105, 79, 100, 110])).toStrictEqual([79, 100, 105, 110]);
});
