//Using iteration, write a function fibs which takes a number and returns an array containing
//that many numbers from the fibonacci sequence.
//Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

function fibs(num) {
  if (num <= 0) return "Invalid number";

  let arr = [0, 1];
  if (num === 1) return [0];
  else if (num === 2) return arr;

  while (arr.length < num) {
    let nextNum = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(nextNum);
  }
  return arr;
}

let fibSequence = fibs(8);
console.log(fibSequence);

//Now write another function fibsRec which solves the same problem recursively.

function fibsRec(num) {
  if (num <= 0) return "Invalid number";

  if (num === 1) return [0];
  else if (num === 2) return [0, 1];

  let arr = fibsRec(num - 1);
  let nextNum = arr[arr.length - 1] + arr[arr.length - 2];
  arr.push(nextNum);

  return arr;
}

let fibSequenceRec = fibsRec(8);
console.log(fibSequenceRec);
