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

  // 4. Write an insert and delete functions which accepts a value to insert/delete
  insert(value) {
    const newNode = new Node(value);

    const insertNode = (node) => {
      if (value === node.data)
        return console.log(`The value ${value} already exists`);

      if (value < node.data) {
        if (!node.left) node.left = newNode;
        else insertNode(node.left);
      } else if (value > node.data) {
        if (!node.right) node.right = newNode;
        else insertNode(node.right);
      }
    };

    if (!this.root) this.root = newNode;
    else insertNode(this.root);
  }

  delete(value) {
    const findMinNode = (node) => {
      while (node.left) {
        node = node.left;
      }
      return node;
    };

    const deleteNode = (node, val) => {
      if (!node) {
        console.log(`Value ${val} not found in the tree.`);
        return null;
      }

      if (val < node.data) {
        node.left = deleteNode(node.left, val);
      } else if (val > node.data) {
        node.right = deleteNode(node.right, val);
      } else {
        if (!node.left && !node.right) {
          node = null;
        } else if (!node.left) {
          node = node.right;
        } else if (!node.right) {
          node = node.left;
        } else {
          const temp = findMinNode(node.right);
          node.data = temp.data;
          node.right = deleteNode(node.right, temp.data);
        }
      }
      return node;
    };
    this.root = deleteNode(this.root, value);
  }
}

//Tip: If you would like to visualize your binary search tree, here is a prettyPrint() function that will console.log your tree
//in a structured format. This function will expect to receive the root of your tree as the value for the node parameter
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const myTree = new Tree(arr);

prettyPrint(myTree.root);
myTree.insert(120);
myTree.insert(7);
console.log("----------------------");

prettyPrint(myTree.root);
console.log("----------------------");
myTree.delete(67);
prettyPrint(myTree.root);
