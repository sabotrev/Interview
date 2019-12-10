/*
Palindrome Number

    Details & Examples: https://leetcode.com/problems/palindrome-number/
*/

const isPalindrome = x => {
  let reversedNumber = 0;
  let helperNumber = x;

  while (helperNumber > 0) {
    const endNumber = helperNumber % 10;
    reversedNumber = reversedNumber * 10 + endNumber;
    helperNumber = Math.floor(helperNumber / 10);
  }

  return reversedNumber === x;
};

console.log(isPalindrome(123)); // false
