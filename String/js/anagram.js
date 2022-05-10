const anagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const seen = {};

  for (let i = 0; i < s.length; i++) {
    let currVal = s.charAt(i);
    if (!seen[currVal]) {
      seen[currVal] = 1;
    } else {
      seen[currVal] = seen[currVal] + 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    let currentValue = t.charAt(i);
    if (seen[currentValue]) {
      seen[currentValue] = seen[currentValue] - 1;
    }
  }

  for (let key of Object.keys(seen)) {
    if (seen[key] > 0) return false;
  }

  console.log(seen);

  return true;
};

const s = 'anagram';
const t = 'nagaraz';

console.log(anagram(s, t));
