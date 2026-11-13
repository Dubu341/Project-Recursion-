function mergeSort(array) {
  if (array.length <= 1) return array;
  else {
    const splitIndex = Math.floor(array.length / 2);
    const left = array.slice(0, splitIndex);
    const right = array.slice(splitIndex);

    return merge(mergeSort(left), mergeSort(right));
  }
}
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while ((leftIndex < left.length) & (rightIndex < right.length)) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
const empty = [];
const nums1 = [1, 3, 2, 4, 5];
const nums2 = [73];
const nums3 = [1, 2, 3, 4, 5];
const nums4 = [3, 2, 1, 13, 8, 5, 0, 1];
const nums5 = [105, 79, 100, 110];
module.exports = mergeSort;
