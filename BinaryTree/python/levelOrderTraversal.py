
# https://www.youtube.com/watch?v=MBZ-gBkjdMc
class Solution:

  def levelOrder(self, root):
    if root is None:
      return []
    queue = [root]
    nextQueue = [] 
    level = []
    result = []
    while queue != []:
      for root in queue:
        level.append(root.val)
        if root.left is not None:
          nextQueue.append(root.left)
        if root.right is not None:
          nextQueue.append(root.right)
      result.append(level)
      queue = nextQueue
      level = []
      nextQueue = []
    return result

      