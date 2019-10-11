# BST Insertion


class Node(object):
    def __init__(self, data):
        self.left = None
        self.right = None
        self.data = data

    def insert(self, data):
        if data < self.data:
            if self.left is None:
                self.left = Node(data)
            else:
                self.left.insert(data)
        else:
            if self.right is None:
                self.right = Node(data)
            else:
                self.right.insert(data)

    def inorder_print(self):
        if self.left:
            self.left.inorder_print()
        print(self.data)
        if self.right:
            self.right.inorder_print()


root = Node(5)
root.insert(4)
root.insert(6)
root.insert(7)
root.inorder_print()
