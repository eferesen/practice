const largestCommonPrefix = (strs) => {
  let matched = '';
  // Get the first word out since we will compare this to others
  const firstWord = strs[0];

  // Length === 0 return matched
  if (strs.length === 0) {
    return matched;
  }

  // Iterate over every letter in `firstWord`
  for (let i = 0; i < firstWord.length; i++) {
    // Iterate over the rest of the `strs` starting from index 1
    for (let j = 1; j < strs.length; j++) {
      // Variablize the current word
      let currentWord = strs[j];
      // use the current index of `firstWord`
      let currentLetter = currentWord.charAt(i);
      // Compare the letter from `firstWord[i]` to `currentLetter`
      // also make sure that index of `firstWord` is greater that currentword length
      if (firstWord[i] !== currentLetter || i > currentWord.length) {
        return matched;
      }
    }
    matched += firstWord[i];
  }
  return matched;
};

strs = ['flower', 'flow', 'flight'];

console.log(largestCommonPrefix(strs));
