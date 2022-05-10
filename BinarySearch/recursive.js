const binarySearch = (arr, min, max, target) => {
  if (min > max) {
    // We did not find anything
    return false;
  } else {
    // Calculate the midpoint
    let midPoint = Math.floor((min + max) / 2);
    if (arr[midPoint] == target) {
      // If the target is value a arr[midpoint] we found the answer
      return true;
    } else if (target < arr[midPoint]) {
      // if target is smaller than the mid point. Shrink the midpoints
      // from min to midPoint - 1
      return binarySearch(arr, min, midPoint - 1, target);
    } else {
      // if target is > than midpoint lets looks at the right half of the array
      return binarySearch(arr, midPoint + 1, max, target);
    }
  }
};

const arr = [2, 5, 6, 8, 9, 10, 14, 18, 22, 43, 51];

console.log(binarySearch(arr, 0, arr.length, 22));
