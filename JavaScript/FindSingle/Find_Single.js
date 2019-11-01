/*
Find Single

Description:
    Given an array of integers, arr, where all numbers occur twice except one number which occurs
    once, find the number. Your solution should ideally be O(n) time and use constant extra space.

Example:
    input: [7, 3, 5, 5, 4, 3, 4, 8, 8]
    output: 7
*/


const findSingle = arr => {
    arr = arr.sort();
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result = result ^ arr[i];
    }
    return result;
}

console.log(findSingle([7, 3, 5, 5, 4, 3, 4, 8, 8])); // 7

// Bitwise AND	a & b
// Bitwise OR	a | b
// Bitwise XOR	a ^ b
// Bitwise NOT	~ a