class BinaryTree:
  def __init__(self, size):
    self.customList = size * [None]
    self.lastUpdateIndex = 0
    self.maxSize = size

  def isFull(self):
    return self.lastUpdateIndex == self.maxSize

  def insertNode(self, value):
    if self.lastUpdateIndex == self.maxSize:
      return
    else


# space complexity O(n)
bt = BinaryTree(8)