/*
Maximum Subarray

    Details & Examples: https://leetcode.com/problems/maximum-subarray/
*/

/**
Brute Force
    Time: O(n^2)
 */
const maxSubArray1 = nums => {
  let maxSubArraySum = Number.NEGATIVE_INFINITY;

  for (let left = 0; left < nums.length; left++) {
    let runningSum = 0;
    for (let right = left; right < nums.length; right++) {
      runningSum += nums[right];
      maxSubArraySum = Math.max(maxSubArraySum, runningSum);
    }
  }
  return maxSubArraySum;
};

console.log(maxSubArray1([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
