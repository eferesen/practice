const count = 10000;
const halfCount = count / 2;
const numbers = Array.from(Array(count)).map((num, i) => i + 1);

const time = (label, func) => {
  const hrstart = process.hrtime();
  const ret = func();
  const hrend = process.hrtime(hrstart);
  console.info(
    '%s: %ds %dms',
    label.padEnd(10),
    hrend[0],
    hrend[1] / 1_000_000
  );
  return ret;
};

time('doubleLoop', () => {
  const pairs = [];
  numbers.forEach((numI) => {
    numbers.forEach((numJ) => {
      if (numI + numJ === count && numI < numJ) pairs.push([numI, numJ]);
    });
  });
});



time('find', () => {
  const pairs = [];
  numbers.forEach((num) => {
    const match = numbers.find(
      (element) => element + num === count && num < element
    );
    if (match) {
      pairs.push([num, match]);
    }
  });
});

time('includes', () => {
  const pairs = [];
  const under = numbers.filter(elem => elem < halfCount);
  const over = numbers.filter(elem => elem > halfCount);
  under.forEach(num => {
    if (over.includes(count - num)){
      pairs.push([num, count - num])
    }
  })
  // console.log(pairs)
});

time('Set', () => {
  const pairs = []
  const under = numbers.filter(num => num < halfCount)
  const over = new Set(numbers.filter(num => num > halfCount))
  
  under.forEach(num => {
    const matched = over.has(count - num);
    if (matched) pairs.push([num, count - num])
  })
  // console.log(pairs)
})