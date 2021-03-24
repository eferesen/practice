class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Bst {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  size() {
    return this.count;
  }

  add(value) {
    // Increase count
    this.count++;
    // Create New Node
    const newNode = new Node(value);

    const searchTree = (node) => {
      // Determine whether to add the value to the left or right

      if (value < node.value) {
        // Going left
        node.left ? searchTree(node.left) : (node.left = newNode);
      } else if (value > node.value) {
        // going right
        node.right ? searchTree(node.right) : (node.right = newNode);
      }
    };

    // Start the recursive tree with the root node
    searchTree(this.root);
  }
}

const bst = new Bst(15);
bst.add(12);

bst.add(17);
bst.add(4);
bst.add(24);
console.log(bst);

console.log(bst.size());
