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
}
