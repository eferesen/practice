# https://www.youtube.com/watch?v=x2aUTgi-068
# https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
class Node:
  def __init__(self, val):
    self.val = val
    self.left = None
    self.right = None


class Solution(object):
    def buildTree(self, inorder, postorder):
      if not inorder or not postorder:
        return None

      # find out root from postorder because the last 
      # element is the root of the node
      topOfTree = postorder[-1]
      root = Node(topOfTree)
      # find the index of topOfTree in In Order
      idx = inorder.index(topOfTree)

      root.left = self.buildTree(inorder[:idx], postorder[:idx])
      root.right = self.buildTree(inorder[idx + 1:], postorder[idx:-1])

      return root


