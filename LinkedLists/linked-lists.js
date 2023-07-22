//Assignment:
//You will need two classes or factories:
// -> LinkedList class / factory, which will represent the full list.
// -> Node class / factory, containing a value property and a link to the nextNode, set both as null by default.

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
    this._size = 0;
  }

  //append(value) adds a new node containing value to the end of the list
  append(value) {
    const newNode = new Node(value);
    //if empty, make headNode
    if (!this.headNode) {
      this.headNode = newNode;
    } else {
      //else append to the end, after tailNode
      this.tailNode.nextNode = newNode;
    }
    this.tailNode = newNode;
    this._size++;
  }

  //prepend(value) adds a new node containing value to the start of the list
  prepend(value) {
    this.headNode = new Node(value, this.headNode);
    if (!this.tailNode) {
      this.tailNode = this.headNode;
    }
    this._size++;
  }

  //size returns the total number of nodes in the list
  size() {
    return this._size;
  }

  //head returns the first node in the list
  head() {
    return this.headNode;
  }

  //tail returns the last node in the list
  tail() {
    return this.tailNode;
  }

  //at(index) returns the node at the given index
  at(index) {
    //if index chosen is out of linked list's range
    if (index < 0 || index >= this._size) {
      return "Index out of range";
    }

    //starting from headNode
    let currentNode = this.headNode;
    //looping through the linked lists indexes to find chosen one
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }
}

const linkedList = new LinkedList();

linkedList.prepend(30);
linkedList.prepend(40);
linkedList.append(20);
linkedList.append(10);
console.log(linkedList.size());
console.log(linkedList.tail());
console.log(linkedList.head());
console.log(linkedList);

console.log(linkedList.at(1));
