/*
Kth Largest

    Description:
        Given a list, find the k-th largest element in the list.

    Example:
        input: arr = [3, 5, 2, 4, 6, 8]
            k = 3
        output: 5
*/

const findKthLargest = (arr, k) => {
    return arr.sort()[arr.length - k];
}

console.log(findKthLargest([3, 5, 2, 4, 6, 8], 3));