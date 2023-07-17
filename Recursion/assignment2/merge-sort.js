//Build a function mergeSort that takes in an array and returns
//a sorted array, using a recursive merge sort methodology.

//using mergeSort recursively, we split the input array into halves until
//the base case is reached where the array length is less than or equal to 1.
// The function then returns the array as is.

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);

  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // the sorted halves are merged using the merge function
  return merge(sortedLeft, sortedRight);
}

function merge(leftArr, rightArr) {
  const mergedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  //the while loop compares the elements from the left and right arrays
  //and appends the smaller element to the mergedArr array.
  //It continues until either the leftArr or rightArr is fully traversed.

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] <= rightArr[rightIndex]) {
      mergedArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      mergedArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  //the loops handle the remaining elements in either the left or right array,
  //appending the remaining elements to the mergedArr.
  while (leftIndex < leftArr.length) {
    mergedArr.push(leftArr[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < rightArr.length) {
    mergedArr.push(rightArr[rightIndex]);
    rightIndex++;
  }
  return mergedArr;
}

const unsortedArray = [5, 2, 8, 3, 1, 6, 4, 7];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);
