/*
Two Sum

Description:
    Create a function that takes two parameters:
        First: nums, is an array of numbers.
        Second: total is a single number.
    The output of the function should be a two-element array that represents a pair of numbers in nums that add up to total.

Example:
    input: nums = [1, 2, 3], total = 4
    output: [1, 3]

    input: nums = [3, 9, 12, 20], total = 21
    output: [9, 12]
*/


/*
Brute Force

    Time: O(n^2), or quadratic
    Space: O(1), or constant

*/
const twoSum1 = (nums, total) => {
    var result = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === total) {
                result.push(nums[i]);
                result.push(nums[j]);
            }
        }
    }

    return result;
};

console.log(twoSum1([1, 2, 3], 4)); // [1, 3]
console.log(twoSum1([3, 9, 12, 20], 21)); // [9, 12]


/*
Hash table

    Time: O(n)
    Space: O(n)

    Notes: Each object lookup is O(1) and the loop is O(n).
*/
const twoSum2 = (nums, total) => {
    const previousValues = {}

    for (let i = 0; i < nums.length; i++) {
        const complement = total - nums[i];

        if (previousValues[complement]) {
            return [complement, nums[i]];
        }

        previousValues[nums[i]] = true;
    }
};

console.log(twoSum2([1, 2, 3], 4)); // [1, 3]
console.log(twoSum2([3, 9, 12, 20], 21)); // [9, 12]


/*
Set

    Time: O(n)
    Space: O(n)
*/
const twoSum3 = (nums, total) => {
    const previousValues = new Set();

    for (let i = 0; i < nums.length; i++) {
        const complement = total - nums[i];

        if (previousValues.has(complement)) {
            return [complement, nums[i]];
        }

        previousValues.add(nums[i]);
    }
};

console.log(twoSum3([1, 2, 3], 4)); // [1, 3]
console.log(twoSum3([3, 9, 12, 20], 21)); // [9, 12]


/*
Return indicies of the two values

    Time: O(n)
    Space: O(n)    
*/
const twoSumWithIndicies = (nums, target) => {
    const previousValues = {}

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (previousValues[complement] !== undefined) {
            return [previousValues[complement], i];
        }

        previousValues[nums[i]] = i;
    }
};

console.log(twoSumWithIndicies([1, 2, 3], 4)); // [0, 2]
console.log(twoSumWithIndicies([3, 9, 12, 20], 21)); //  [0, 2]
console.log(twoSumWithIndicies([3, 3], 6)); // [0, 1]