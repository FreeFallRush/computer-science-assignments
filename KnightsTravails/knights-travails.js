//define possible knight move directions

const directions = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
];

//Node class to represent positions and paths

class Node {
  constructor(row, col, distanceFromStartPoint, parent = null) {
    this.row = row;
    this.col = col;
    this.distanceFromStartPoint = distanceFromStartPoint;
    this.parent = parent;
  }

  //method that returns a string which identifies a node based on the location
  getPositionString() {
    return `${this.row}, ${this.col}`;
  }

  //method to retrieve the path from the current node to the root node
  getPath() {
    const path = [];
    //start from current node
    let currentNode = this;
    //traverse current node to the root node(start position)
    while (currentNode !== null) {
      path.unshift([currentNode.row, currentNode.col]);
      currentNode = currentNode.parent;
    }

    return path;
  }
}

// Get neighboring positions based on knight move directions
const getNeighbors = (row, col) => {
  const neighbors = [];

  //loop through each possible move direction
  for (const direction of directions) {
    const [rowChange, colChange] = direction;

    //calculate the neighbor's row and column by adding the changes to the current position
    const neighborRow = row + rowChange;
    const neighborCol = col + colChange;

    neighbors.push([neighborRow, neighborCol]);
  }

  return neighbors;
};

// Main function to find the shortest path using BFS
function knightMoves(start, end) {
  //initialize a queue for nodes
  const queue = [];

  //create a starting node with row, col and distance from start as 0
  const startNode = new Node(start[0], start[1], 0);
  //add the start node to the queue
  queue.push(startNode);

  //initialize a set to track visited nodes
  const visited = new Set();

  //continue exploring nodes while the queue is not empty
  while (queue.length > 0) {
    const node = queue.shift();
    const { row, col, distanceFromStartPoint } = node;

    //if current node position matches the end position, return the path
    if (row === end[0] && col === end[1]) return node.getPath();

    //mark current node as visited
    visited.add(node.getPositionString());

    //explore neighbors of current node
    for (const neighbor of getNeighbors(row, col)) {
      const [neighborRow, neighborCol] = neighbor;

      //create neighbor node with updated distance and parent reference
      const neighborNode = new Node(
        neighborRow,
        neighborCol,
        distanceFromStartPoint + 1,
        node
      );

      //skip if neighbor node has been visited already
      if (visited.has(neighborNode.getPositionString())) continue;

      //add the neighbor node to the queue
      queue.push(neighborNode);
    }
  }
}

//function to print the path
function printPath(path) {
  if (path) {
    console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
    path.forEach((step) => console.log(step));
  } else {
    console.log("No path found.");
  }
}

//Test case
const path = knightMoves([3, 3], [4, 3]);
printPath(path);
