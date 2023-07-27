//Assignment:

// 1. Build a Node class / factory. It should have an attribute for the data it stores as well as its left and right children.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// 2. Build a Tree class / factory which accepts an array when initialized. The Tree class should have a root attribute which
//uses the return value of buildTree which you’ll write next.

class Tree {
  constructor(arr) {
    this.root = this.buildTree(arr);
  }

  // 3. Write a buildTree function which takes an array of data (e.g. [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
  //and turns it into a balanced binary tree full of Node objects appropriately placed (don’t forget to sort and remove duplicates!).
  //The buildTree function should return the level-0 root node.

  buildTree(arr) {
    const sortedArr = [...new Set(arr)].sort((a, b) => a - b);

    const buildBST = (start, end) => {
      if (start > end) return null;

      const middle = Math.floor((start + end) / 2);
      const node = new Node(sortedArr[middle]);

      node.left = buildBST(start, middle - 1);
      node.right = buildBST(middle + 1, end);

      return node;
    };

    return buildBST(0, sortedArr.length - 1);
  }
}
