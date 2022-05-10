const levelOrderTraversal = (root) => {
  let finalResult = [];
  // Sample [3, 9, 20, null, null, 15, 7]
  /*        
            3
           / \ 
          9   20
             /  \
            15   7
  */

  // If the root is null return empty array
  if (root === null) return finalResult;

  // Let create a queue, use an array
  let queue = [];
  // Start off by pushing in the root element
  queue.push(root);

  while (queue.length > 0) {
    // Row will be filled with the children
    let row = [];
    // Keep track of the length of the row Array
    let rowSize = queue.length;
    while (rowSize > 0) {
      // Remove the element from queue as we are processing
      let currentNode = queue.shift();
      // Check left node and add to queue
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      // Check right node and add to queue
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
      // Add current Node value to row
      row.push(currentNode.val);
      // decrement row
      rowSize--;
    }
    finalResult.push(row);
  }
  return finalResult;
};
