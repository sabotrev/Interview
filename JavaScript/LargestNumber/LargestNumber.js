/*
Largest Number

Description:
    Given a number of integers, combine them so it would create the largest number.

Example:
    input: [17, 7, 2, 45, 72]
    output: 77245217
*/


const largestNumber = (arr) => {
  arr.sort((a, b) => {
    const aStr = a.toString();
    const bStr = b.toString();
    const ab = parseInt(aStr + bStr);
    const ba = parseInt(bStr + aStr);

    if (ab < ba) {
      return 1;
    } else if (ab > ba) {
      return -1;
    } else {
      return 0;
    }
  })

  return parseInt(arr.join(''));
}

console.log(largestNumber([1, 2, 3]))  // 321
console.log(largestNumber([17, 7, 2, 45, 72]))  // 77245217