const isValidBST = (root) => {
  return validator(root, -Infinity, Infinity);
};

const validator = (node, min, max) => {
  if (node === null) {
    return true;
  }

  if (node.val <= min || node.val >= max) {
    return false;
  }
  return (
    validator(node.left, min, node.val) && validator(node.right, node.val, max)
  );
};
