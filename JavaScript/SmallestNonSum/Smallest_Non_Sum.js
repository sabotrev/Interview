/*
Smallest Non Sum

    Description:
        Given a sorted list of positive numbers, find the smallest positive number that cannot be
        a sum of any subset in the list.


    Example:
        input: [1, 2, 3, 8, 9, 10]
        output: 7
*/


const smallestNonSum = (arr) => {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= result) {
      result += arr[i];
    } else {
      break;
    }
  }

  return result;
}

console.log(smallestNonSum([1, 2, 3, 8, 9, 10])); // 7
console.log(smallestNonSum([1, 2, 3, 4, 5, 6])); // 22