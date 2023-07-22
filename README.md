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
