const matchingParens = (s) => {
  const stack = [];
  const mapping = {
    '}': '{',
    ')': ')',
    ']': '[',
  };

  for (let i = 0; i < s.length; i++) {
    // console.log(s.charAt(i));
    // Check to see if we found a closing paren
    let current = s.charAt(i);

    if (mapping[current]) {
      // We found a closing paren

      // Check the length of the stack

      let currentElement;
      if (stack.length) {
        currentElement = stack.pop();
      } else {
        currentElement = 'X'; // place holder
      }

      if (currentElement !== mapping[current]) {
        console.log('fail');
        return false;
      }
    } else {
      // This is a open parens add to stack
      stack.push(current);
      console.log(stack);
    }
  }

  if (stack.length > 0) {
    return false;
  }

  return true;
};

const str = '((';

console.log(matchingParens(str));
