const arr = [0, 131, 22, 13, 3, 5, 33, 20];

const ln = [null, null, null];

for (const val of arr) {
  updateLargest(val);
}

function updateLargest(val) {
  // Largest Number
  if (ln[2] === null || val > ln[2]) {
    switchIndex(val, 2);
  } else if (ln[1] === null || val > ln[1]) {
    switchIndex(val, 1);
  } else if (ln[0] === null || val > ln[0]) {
    switchIndex(val, 0);
  }
}

function switchIndex(val, idx) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      ln[i] = val;
    } else {
      ln[i] = ln[i + 1];
    }
  }
}

console.log(ln);
