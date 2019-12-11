/*
Binary Tree Level Order Traversal

    Details & Examples: https://leetcode.com/problems/binary-tree-level-order-traversal/
*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const levelOrder = root => {
  let result = [];

  if (root === null) {
    return result;
  }

  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let size = queue.length;
    let currentLevel = [];

    for (let i = 0; i < size; i++) {
      let currentNode = queue[0];
      currentLevel.push(currentNode.val);

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }

      queue.shift();
    }
    result.push(currentLevel);
  }

  return result;
};

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(levelOrder(root)); // [[3],[9,20],[15,7]]
