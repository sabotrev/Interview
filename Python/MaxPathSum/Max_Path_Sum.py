# Max Path Sum
# Description:
#   Given a binary tree, find the maximum path sum. The path can start and end at any node in the
#   tree.

# Example:
#     input: https://drive.google.com/file/d/19v7ivqLll6iAPe_HFXwB7F7TTiYyObtb/view
#     output: 43


class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

# For each node there are 4 possible ways to get the max value:
#   1. Node itself
#   2. Node + left child
#   3. Node + right child
#   4. Node + left child + right child


def maxPathSum(node):
    if node is None:
        return 0
    else:
        left = maxPathSum(node.left)
        right = maxPathSum(node.right)

        maxSingle = max(max(left, right) + node.data, node.data)
        maxTop = max(maxSingle, left + right + node.data)

        maxPathSum.res = max(maxPathSum.res, maxTop)

        return maxSingle


def findMaxPathSum(root):
    maxPathSum.res = float("-inf")
    maxPathSum(root)
    return maxPathSum.res


root = Node(10)
# Left Side
root.left = Node(3)
root.left.left = Node(20)
root.left.right = Node(1)
# Right Side
root.right = Node(10)
root.right.right = Node(-20)
root.right.right.left = Node(5)
root.right.right.right = Node(2)

print(findMaxPathSum(root))  # 43
