# Tree Traversal


class Node:
    def __init__(self, data):
        self.left = None
        self.right = None
        self.data = data

    def print_pre_order(self, root):
        if root:
            print(root.data)
            self.print_pre_order(root.left)
            self.print_pre_order(root.right)

    def print_in_order(self, root):
        if root:
            self.print_in_order(root.left)
            print(root.data)
            self.print_in_order(root.right)

    def print_post_order(self, root):
        if root:
            self.print_post_order(root.left)
            self.print_post_order(root.right)
            print(root.data)


root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)
print("Preorder traversal of binary tree is")
root.print_pre_order(root)

print("\nInorder traversal of binary tree is")
root.print_in_order(root)

print("\nPostorder traversal of binary tree is")
root.print_post_order(root)
