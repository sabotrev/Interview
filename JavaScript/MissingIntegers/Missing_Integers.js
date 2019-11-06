/*
Missing Integers

Description:
    Given a list of ordered integers with some of the numbers missing
    (and with possible duplicates), find the missing numbers.

Example:
    input: [1, 3, 3, 3, 5, 6]
    output: 2, 4
*/


const missingIntegers1 = (integers) => {
    const missed = [];
    integers.forEach((_, index) => {
        if (!integers.includes(index + 1)) {
            missed.push(index + 1);
        }
    })
    return missed;
}

console.log(missingIntegers1([1, 3, 3, 3, 5, 6])); // 2, 4
console.log(missingIntegers1([1, 2, 3, 4, 4, 7, 7])); // 5, 6


const missingIntegers2 = (arr) => {
    const res = [];
    const missingSet = new Set(arr);
    arr = [...missingSet]
  
    for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
      if (!arr.includes(i)) {
        res.push(i);
      }
    }
  
    return res;
  }
  
  console.log(missingIntegers2([1, 3, 3, 3, 5, 6])); // 2 4
  console.log(missingIntegers2([1, 2, 3, 4, 4, 7, 7])); // 5 6