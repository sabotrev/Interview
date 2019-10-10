/*
Contiguous Subarray with Maximum Sum

    Description:
        You are given an array of integers. Find the maximum sum of all possible contiguous
        subarrays of the array.

    Example:
        input: arrr = [34, -50, 42, 14, -5, 86]
        output: 137
        explanation: sum of [42, 14, -5, 86] = 137
*/


const maxSubArraySum = (arr) => {
    return Math.max(...arr.map((num, i, subArr) => {
        return subArr.slice(i).reduce((acc, val) => acc + val);
    }));
}

console.log(maxSubArraySum([34, -50, 42, 14, -5, 86])); // 137