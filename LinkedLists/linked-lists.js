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

  //pop removes the last element from the list
  pop() {
    //if linked list is empty
    if (!this.headNode) {
      return "There are no elements to remove because this list is empty.";
    }

    let currentNode = this.headNode;
    let previousNode = null;

    while (currentNode.nextNode) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    if (previousNode) {
      previousNode.nextNode = null;
      this.tailNode = null;
    }
    this._size--;
    return currentNode.value;
  }

  //contains(value) returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {
    let currentNode = this.headNode;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  //find(value) returns the index of the node containing value, or null if not found.
  find(value) {
    let currentNode = this.headNode;
    let index = 0;

    while (currentNode) {
      if (currentNode.value === value) {
        return index;
      }

      currentNode = currentNode.nextNode;
      index++;
    }
    return null;
  }

  //toString represents your LinkedList objects as strings, so you can print
  //them out and preview them in the console.
  //The format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    if (this._size === 0) {
      return "This list is empty.";
    }
    let currentNode = this.headNode;
    let result = "";

    while (currentNode) {
      result += `(${currentNode.value}) -> `;
      currentNode = currentNode.nextNode;
    }
    result += "null";
    return result;
  }

  //insertAt(value, index) that inserts a new node with the provided value at the given index.
  insertAt(value, index) {
    if (index < 0 || index > this._size) {
      return "Index out of range";
    }

    if (index === 0) {
      return this.prepend(value);
    }

    if (index === this._size) {
      return this._append(value);
    }

    const newNode = new Node(value);
    let previousNode = this.at(index - 1);
    newNode.nextNode = previousNode.nextNode;
    previousNode.nextNode = newNode;
    this._size++;
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
console.log(linkedList.pop());

console.log(linkedList.contains(40));
console.log(linkedList.contains(90));

console.log(linkedList.find(40));
console.log(linkedList.find(90));

console.log(linkedList.toString());

linkedList.insertAt(50, 1);
console.log(linkedList.toString());
