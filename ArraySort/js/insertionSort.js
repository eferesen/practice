const swap = (a, b, arr) => {
  [arr[a], arr[b]] = [arr[b], arr[a]];
};

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      swap(j, j - 1, arr);
      j--;
    }
  }
  return arr;
};

const arr = [4, 1, 8, 2, 3, 2];
console.log(insertionSort(arr));
