// O(n log n)
/*

Strategy 

1) Base case
2) Split array in half
3) make recusrive call

*/

const mergeSort = (arr) => {
  // Base case
  if (arr.length <= 1) {
    return arr;
  }
  // Split in half
  const midPoint = Math.floor(arr.length / 2);
  const left = arr.slice(0, midPoint);
  const right = arr.slice(midPoint);
  // recursively call left and right
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const merged = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      // Add items to merged and keep removing elements from left
      merged.push(left.shift());
    } else {
      // Add items to merged and keep removing elements from right
      merged.push(right.shift());
    }
  }
  return [...merged, ...left.slice(), ...right.slice()];
};

(function test() {
  arr = [45, 2, 15, 23, 11, 4, 1];
  console.log(mergeSort(arr));
})();
