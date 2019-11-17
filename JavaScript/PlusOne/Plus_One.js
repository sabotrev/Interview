/*
Plus One

Description:
    Given a non-empty array where each element represents a digit of a non-negative integer, add
    one to the integer. The most significant digit is at the front of the array and each element
    in the array contains only one digit. Furthermore, the integer does not have leading zeros,
    except in the case of the number '0'.

Example:
    input: [2, 3, 4]
    output: [2, 3, 5]

    input: [2, 9, 9]
    output: [3, 0, 0]
*/



const plusOne = (arr) => {
  arr = (parseInt(arr.join("")) + 1).toString().split('');
  return arr.map(num => parseInt(num));
}

console.log(plusOne([2, 3, 4])); // [2, 3, 5]
console.log(plusOne([2, 9, 9])); // [3, 0, 0]