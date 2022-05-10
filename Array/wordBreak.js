// https://www.youtube.com/watch?v=cQsbVsLHAUo

const wordBreak = (s, wordDict) => {
  const table = Array(s.length + 1).fill(false);

  table[s.length] = true;

  for (let i = s.length; i >= 0; i--) {
    for (let word of wordDict) {
      let tmpLength = i + word.length <= s.length;
      let sliced = s.slice(i, i + word.length);

      if (tmpLength && sliced === word) {
        table[i] = table[i + word.length];
      }
      if (table[i]) continue;
    }
  }

  return table[0];
};

const s = 'leetcode';
const wordDict = ['leet', 'code'];

console.log(wordBreak(s, wordDict));
