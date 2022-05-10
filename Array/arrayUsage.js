const arr = [2, 4, 3, 5, 8, 43, 32];

// For all these exercise return an array

// Remove first element
const removeFirstElement = arr.slice(1);
console.log('Remove first element', removeFirstElement);

// Remove last element
const removeLastElement = arr.slice(0, -1);
console.log('Remove last element', removeLastElement);

// Remove fisrt and last element from array
const removeFirstLastElement = arr.slice(1, -1);
console.log('Remove fisrt and last element', removeFirstLastElement);

// Retrieve last element
const getLastElement = arr.slice(-1);
console.log('Retrieve last element', getLastElement);

console.log('==============');

// In place array modification

const inPlaceArr = [2, 4, 3, 5, 8, 43, 32];

// remove in place first element

console.log(inPlaceArr.splice(0, 1));

// Array Swap elements
const swapArr = [1, 2, 3, 1, 4];

let indexTracker = 0;

console.log('Orig Arr', swapArr);
// index 0 with index 2
[swapArr[0], swapArr[2]] = [swapArr[2], swapArr[0]];
console.log('Swap Arr', swapArr);

// Populate array with false for each character of a given string
const str = 'whoanelly';

const characterBooleanArray = new Array(str.length + 1).fill(false);
console.log('Character Boolean Array', characterBooleanArray);
