// Write a function that takes an array of numbers and returns the unique number

// Rules: Minimum numbers = 3

// Input: Array of Numbers
// Output: Number

// Example: [1, 1, 1, 2, 1, 1] = 2

// Steps:
// take first number of array and call filter over array
//   if first spot !== curretn itteration return number
// if length of this array is > than 1 set return array[0]
// else return  the filtered array [0]

function findUniq(arr) {
  let checkNumber = arr[0];
  let filteredArray = arr.filter(currentNumber => {
    return checkNumber !== currentNumber;
  });

  if (filteredArray.length > 1) {
    return checkNumber;
  } else {
    return filteredArray[0];
  }
}

console.log(findUniq([ 0, 1, 0 ]));  //, 1);
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));  //, 2);
console.log(findUniq([ 3, 10, 3, 3, 3 ]));  //, 10);