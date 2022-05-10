const maxDepth = (root) => {
  return maxNode(root, 0);
};

const maxNode = (node, sum) => {
  // If node is null return sum
  if (node === null) {
    return sum;
  }
  // Divide the tree in 2 halves. Left and Right
  return Math.max(maxNode(node.left, sum + 1), maxNode(node.left, sum + 1));
};
