# computer-science-assignments

Odin Project Assignments from 'A Bit of Computer Science' chapter

---

Project: Recursion
(https://www.theodinproject.com/lessons/javascript-recursion)

Assignment 1:
Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].
Now write another function fibsRec which solves the same problem recursively.

Assignment 2:
Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.

---

Project: Linked Lists
(https://www.theodinproject.com/lessons/javascript-linked-lists)

Assignment:

You will need two classes or factories:

- LinkedList class / factory, which will represent the full list.
- Node class / factory, containing a value property and a link to the nextNode, set both as null by default.

Build the following functions in your linked list class:

- append(value) adds a new node containing value to the end of the list
- prepend(value) adds a new node containing value to the start of the list
- size returns the total number of nodes in the list
- head returns the first node in the list
- tail returns the last node in the list
- at(index) returns the node at the given index
- pop removes the last element from the list
- contains(value) returns true if the passed in value is in the list and otherwise returns false.
- find(value) returns the index of the node containing value, or null if not found.
- toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null

Extra credit:

- insertAt(value, index) that inserts a new node with the provided value at the given index.
- removeAt(index) that removes the node at the given index.

---

Project: Binary Search Trees
(https://www.theodinproject.com/lessons/javascript-binary-search-trees)

Assignment:

You’ll build a balanced BST in this assignment. Do not use duplicate values because they make it more complicated and result in trees that are much harder to balance. Therefore, be sure to always remove duplicate values or check for an existing value before inserting.

1.  Build a Node class / factory. It should have an attribute for the data it stores as well as its left and right children.

2.  Build a Tree class / factory which accepts an array when initialized. The Tree class should have a root attribute which uses the return value of buildTree which you’ll write next.

3.  Write a buildTree function which takes an array of data (e.g. [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]) and turns it into a balanced binary tree full of Node objects appropriately placed (don’t forget to sort and remove duplicates!). The buildTree function should return the level-0 root node.

4.  Write an insert and delete functions which accepts a value to insert/delete (you’ll have to deal with several cases for delete such as when a node has children or not).

5.  Write a find function which accepts a value and returns the node with the given value.

6.  Write a levelOrder function which accepts another function as a parameter. levelOrder should traverse the tree in breadth-first level order and provide each node as the argument to the provided function. This function can be implemented using either iteration or recursion (try implementing both!). The method should return an array of values if no function is given.

7.  Write inorder, preorder, and postorder functions that accept a function parameter. Each of these functions should traverse the tree in their respective depth-first order and yield each node to the provided function given as an argument. The functions should return an array of values if no function is given.

8.  Write a height function which accepts a node and returns its height. Height is defined as the number of edges in longest path from a given node to a leaf node.

9.  Write a depth function which accepts a node and returns its depth. Depth is defined as the number of edges in path from a given node to the tree’s root node.

10. Write a isBalanced function which checks if the tree is balanced. A balanced tree is one where the difference between heights of left subtree and right subtree of every node is not more than 1.

11. Write a rebalance function which rebalances an unbalanced tree. Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.

Tie it all together

Write a simple driver script that does the following:

-> Create a binary search tree from an array of random numbers < 100. You can create a function that returns an array of random numbers every time you call it, if you wish.
-> Confirm that the tree is balanced by calling isBalanced.
-> Print out all elements in level, pre, post, and in order.
-> Unbalance the tree by adding several numbers > 100.
-> Confirm that the tree is unbalanced by calling isBalanced.
-> Balance the tree by calling rebalance.
-> Confirm that the tree is balanced by calling isBalanced.
-> Print out all elements in level, pre, post, and in order.
