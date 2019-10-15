# Remove a specific node from a linked list


class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def push(self, new_data):
        new_node = Node(new_data)
        new_node.next = self.head
        self.head = new_node

    def remove(self, key):
        curr_node = self.head

        # If key is head
        if curr_node and curr_node.data == key:
            self.head = curr_node.next
            curr_node = None
            return

        # If key is anything other than head
        prev_node_node = None
        while curr_node and curr_node.data != key:
            prev_node = curr_node
            curr_node = curr_node.next

        if curr_node is None:
            return

        prev_node.next = curr_node.next
        curr_node = None

    def printList(self):
        temp = self.head
        while(temp):
            print(temp.data)
            temp = temp.next


linkedList = LinkedList()
linkedList.push(4)
linkedList.push(3)
linkedList.push(2)
linkedList.push(1)
print("Original list")
linkedList.printList()

linkedList.remove(3)
print("After removed 3")
linkedList.printList()
