/*
Partition Equal Subset Sum

    Details & Examples: https://leetcode.com/problems/partition-equal-subset-sum/
*/

const canPartion = nums => {
  nums.sort((a, b) => a - b);
  let sum = nums.reduce((acc, val) => acc + val);

  // If sum is odd return false
  if (sum % 2 !== 0) {
    return false;
  }

  sum /= 2;
  let dp = [];
  dp[0] = true;

  for (num of nums) {
    for (let i = sum; i >= 0; i--) {
      if (i >= num) {
        dp[i] = dp[i] || dp[i - num] ? true : false;
      }
    }
  }

  return dp[sum];
};

console.log(canPartion([1, 5, 11, 5])); // true
console.log(canPartion([1, 2, 3, 5])); // false
console.log(canPartion([1, 2, 3, 4, 5, 6, 7])); // true
