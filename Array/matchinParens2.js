const matchingParens = (arr) => {
  const mapping = {
    '}': '{',
    ']': '[',
    ')': '(',
  };
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (mapping[current]) {
      let lastElement;
      if (stack.length) {
        lastElement = stack.pop();
      }

      if (lastElement !== mapping[current]) {
        return false;
      }
    } else {
      stack.push(current);
    }
  }
  return true;
};

const shit = matchingParens(['{', '[', '(', ')', ']', ']']);
console.log(shit);
