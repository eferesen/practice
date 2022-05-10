// https://www.youtube.com/watch?v=0o4n50sH-4o

const invertTree = (root) => {
  dfs(root);
  return root;
};

const dfs = (node) => {
  // base case
  if (!node) return;
  let tmp = node.left;
  node.left = node.right;
  node.right = tmp;

  dfs(node.left);
  dfs(node.right);
};
