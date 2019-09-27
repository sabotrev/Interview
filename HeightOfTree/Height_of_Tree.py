# Maximum height of tree

#   Description:
#       Recursively calculate height of left and right subtrees of a node and assign height to the
#       node as max of the heights of two children plus 1.

#   Example:
#       input: root
#       output: 3


class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


def maxDepth(node):
    if node is None:
        return 0
    else:
        leftDepth = maxDepth(node.left)
        rightDepth = maxDepth(node.right)

        if (leftDepth > rightDepth):
            return leftDepth + 1
        else:
            return rightDepth + 1


root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

print(maxDepth(root))
