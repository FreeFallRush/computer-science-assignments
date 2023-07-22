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
