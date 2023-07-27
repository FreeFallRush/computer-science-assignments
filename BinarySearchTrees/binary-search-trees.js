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

  // 5. Write a find function which accepts a value and returns the node with the given value.
  find(value) {
    const findNode = (node, val) => {
      if (!node) return null;
      if (val === node.data) return node;
      if (val < node.data) return findNode(node.left, val);
      return findNode(node.right, val);
    };

    const foundNode = findNode(this.root, value);
    if (!foundNode) {
      console.log(`Value ${value} not found in the tree.`);
    }
    return foundNode;
  }

  // 6. Write a levelOrder function which accepts another function as a parameter. levelOrder should traverse
  //the tree in breadth-first level order and provide each node as the argument to the provided function.
  //This function can be implemented using either iteration or recursion (try implementing both!).
  //The method should return an array of values if no function is given.
  //Tip: You will want to use an array acting as a queue to keep track of all the child nodes that you have yet to
  //traverse and to add new ones to the list

  levelOrder(callback = null) {
    const queue = [this.root];
    const result = [];

    while (queue.length) {
      const node = queue.shift();
      if (node) {
        result.push(node.data);
        queue.push(node.left);
        queue.push(node.right);
        if (callback) callback(node);
      }
    }
    return result;
  }

  // 7. Write inorder, preorder, and postorder functions that accept a function parameter.
  //Each of these functions should traverse the tree in their respective depth-first order and yield each node to the
  //provided function given as an argument. The functions should return an array of values if no function is given.
  inorder(callback = null) {
    const traverse = (node) => {
      if (!node) return [];

      const result = [...traverse(node.left), node.data];
      if (callback) callback(node);

      result.push(...traverse(node.right));
      return result;
    };
    return traverse(this.root);
  }

  preorder(callback = null) {
    const traverse = (node) => {
      if (!node) return [];

      const result = [node.data];
      if (callback) callback(node);

      result.push(...traverse(node.left));
      result.push(...traverse(node.right));
      return result;
    };

    return traverse(this.root);
  }

  postorder(callback = null) {
    const traverse = (node) => {
      if (!node) return [];

      const result = [...traverse(node.left), ...traverse(node.right)];
      if (callback) callback(node);

      result.push(node.data);
      return result;
    };

    return traverse(this.root);
  }

  // 8. Write a height function which accepts a node and returns its height.
  //Height is defined as the number of edges in longest path from a given node
  //to a leaf node.
  height(node) {
    if (!node) return -1;
    return Math.max(this.height(node.left), this.height(node.right)) + 1;
  }

  // 9. Write a depth function which accepts a node and returns its depth.
  //Depth is defined as the number of edges in path from a given node to the tree’s root node.
  depth(node) {
    let currentNode = this.root;
    let depth = 0;

    if (!node instanceof Node) return "Not a node!";

    while (currentNode !== null && currentNode.data !== node.data) {
      if (currentNode.data > node.data) {
        currentNode = currentNode.left;
      } else if (currentNode.data < node.data) {
        currentNode = currentNode.right;
      }
      depth++;
    }

    if (currentNode === null) return `Couldnt find: ${node.data}`;

    return depth;
  }

  // 10. Write a isBalanced function which checks if the tree is balanced.
  //A balanced tree is one where the difference between heights of left subtree
  //and right subtree of every node is not more than 1.
  isBalanced(node = this.root) {
    if (!node) return true;
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    const balanced = Math.abs(leftHeight - rightHeight) <= 1;

    return (
      balanced && this.isBalanced(node.left) && this.isBalanced(node.right)
    );
  }

  // 11. Write a rebalance function which rebalances an unbalanced tree.
  //Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.
  rebalance() {
    const values = this.inorder();
    this.root = this.buildTree(values);
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

//testing with example array from assignment
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

console.log("----------------------");
console.log(myTree.find(4));

console.log("----------------------");
console.log("Level Order Traversal:");
console.log(myTree.levelOrder());

console.log("----------------------");
console.log("Preorder Traversal:");
console.log(myTree.preorder());

console.log("----------------------");
console.log("Postorder Traversal:");
console.log(myTree.postorder());

console.log("----------------------");
console.log("Inorder Traversal:");
console.log(myTree.inorder());

console.log("----------------------");
console.log("Height of root node:", myTree.height(myTree.root));

console.log("Height of node:", myTree.height(myTree.find(4)));
console.log("----------------------");

console.log("Depth of node:", myTree.depth(myTree.find(4)));
console.log("----------------------");

console.log("Is the tree balanced?", myTree.isBalanced());

myTree.insert(55);
myTree.insert(130);
myTree.insert(140);
console.log("----------------------");
console.log("Is the tree balanced?", myTree.isBalanced());
myTree.rebalance();
console.log("Is the tree balanced?", myTree.isBalanced());

console.log("----------------------");

///////////////////////////////////////////////////
// Write a simple driver script that does the
//  1. Create a binary search tree from an array of random numbers < 100. You can create a function that returns an array of random numbers every time you call it, if you wish.
//  2. Confirm that the tree is balanced by calling isBalanced.
//  3. Print out all elements in level, pre, post, and in order.
//  4. Unbalance the tree by adding several numbers > 100.
//  5. Confirm that the tree is unbalanced by calling isBalanced.
//  6. Balance the tree by calling rebalance.
//  7. Confirm that the tree is balanced by calling isBalanced.
//  8. Print out all elements in level, pre, post, and in order.

const getRandomNumbersArray = (size) => {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * 100)); // Generate numbers between 0 and 99 (both inclusive)
  }
  return arr;
};

const randomArr = getRandomNumbersArray(10);
console.log(randomArr);
const tree = new Tree(randomArr);
console.log("----------DRIVER SCRIPT------------");
console.log("Is the tree balanced?", tree.isBalanced());
prettyPrint(tree.root);
console.log("----------------------");
console.log("Level Order Traversal:");
console.log(tree.levelOrder());
console.log("----------------------");
console.log("Preorder Traversal:");
console.log(tree.preorder());
console.log("----------------------");
console.log("Postorder Traversal:");
console.log(tree.postorder());
console.log("----------------------");
console.log("Inorder Traversal:");
console.log(tree.inorder());
console.log("----------------------");
tree.insert(44);
tree.insert(85);
myTree.insert(88);
prettyPrint(tree.root);
console.log("----------------------");
console.log("Is the tree balanced?", tree.isBalanced());
tree.rebalance();
console.log("Is the tree balanced?", tree.isBalanced());
console.log("----------------------");
console.log("Level Order Traversal:");
console.log(tree.levelOrder());
console.log("----------------------");
console.log("Preorder Traversal:");
console.log(tree.preorder());
console.log("----------------------");
console.log("Postorder Traversal:");
console.log(tree.postorder());
console.log("----------------------");
console.log("Inorder Traversal:");
console.log(tree.inorder());
console.log("----------------------");
