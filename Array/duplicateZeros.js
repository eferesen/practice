const duplicateZeros = (arr) => {
  console.log(arr.length);
  for (let i = 0; i < arr.length; i++) {
    let isZero = arr[i] === 0;
    if (isZero) {
      arr.splice(i, 0, 0);
      arr.splice(-1);
    }
  }

  return arr;
};

const arr = [1, 0, 2, 3, 0, 4, 5, 0];

console.log(duplicateZeros(arr));
