class Node:
    def __init__(self, value=None):
        self.value = value
        self.left = None
        self.right = None


class BST:
    def __init__(self):
        self.root = None

    def insert(self, value):
        if self.root == None:
            self.root = Node(value)
        else:
            if value < self.root.value:
                if self.left == None:
                    self.left = Node(value)
                else:
                    insert(self.left)
            elif (value > self.root.value):
                if self.right == None:
                    self.right = Node(value)
                else:
                    insert(self.right)
            else:
                #
                print("value exists in tree"

    def printTree(self):
        if self.root != None:
            self.printTree(self.left)
            print(self.root)
            self.printTree(self.right)





def fillTree(tree, maxInt=100, numElems=29):
    from random import randint
    for _ in range(numElems):
        randNum=randint(0, maxInt)
        tree.insert(randNum)
    return tree


tree=BST()
tree=fillTree(tree)
# tree.printTree()
