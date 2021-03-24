class Node:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


class BST:

    def __init__(self):
        self.root = None

    # log2 of n
    def add(self, current, value):
        root = self.root
        # check for root node
        if not root:
            root = Node(value)

        if value < current.value:
            # traverse to the left side of the tree
            if current.left == None:
                current.left = Node(value)
            else:
                # Keep going left
                self.add(current.left, value)

        else:
            # traverse right side of the tree
            if current.right == None:
                current.right = Node(values)
            else:
                self.add(current.right, value)

    def visited(self, node):
        print(node.value)

    def preOrder(self, current):
        self.visited(current)
        self.preOrder(current.left)
        self.preOrder(current.right)

    def inOrder(self, current):
        self.inOrder(current.left)
        self.visited(current)
        self.inOrder(current.right)

    def postOrder(self, current):
        self.postOrder(current.left)
        self.postOrder(current.right)
        self.visited(current)


def fillTree(tree, maxInt=100, numElems=29):
    from random import randint
    for _ in range(numElems):
        randNum = randint(0, maxInt)
        tree.add(randNum)
    return tree


tree = BST()
filledTree = fillTree(tree)

print(tree.inOrder())
