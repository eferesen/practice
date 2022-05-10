#https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/


# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution(object):
    def buildTree(self, preorder, inorder):

        if not preorder or not inorder:
          return None

        # Find the root element
        # it should be the preorder first element
        topOfTree = preorder[0]
        root = TreeNode(topOfTree)
        # find the index in InOrder where the root lies
        idx = inorder.index(topOfTree)

        root.left = self.buildTree(preorder[:idx], inorder[:idx])
        root.right = self.buildTree(preorder[idx +1:], inorder[idx + 1:])

        return root

sol = Solution()
preOrder = [3,9,20,15,7]
inOrder = [9,3,15,20,7]
print(sol(preOrder, inOrder))