/*
Longest Sequence

Description:
    Given a sequence of numbers, find the longest sequence that contains only 2 unique numbers.

Example:
    input: [1, 3, 5, 3, 1, 3, 1, 5]
    output: 4
    explanation: The longest sequence that contains just 2 unique numbers is [3, 1, 3, 1]
*/


/*
Brute Force

    Time: O(n)
    Space: O(1)
*/
const findSequence1 = (arr) => {
    let sequenceMap = {};
    let start = 0;
    let max = 0;
    for (let i = 0; i < arr.length; i ++) {

        if (sequenceMap.hasOwnProperty(arr[i])) {
            sequenceMap[arr[i]]++;
        } else {
            sequenceMap[arr[i]] = 1;
        }

        if (Object.keys(sequenceMap).length === 2) {
            tempMax = [...Object.values(sequenceMap)].reduce((acc, val) => acc + val);

            if (tempMax > max) {
                max = tempMax;
            }
        }

        if (Object.keys(sequenceMap).length > 2) {
            delete sequenceMap[arr[start]];
            start = i - 1;
        }
    }

    return max;
}

console.log(findSequence1([1, 3, 5, 3, 1, 3, 1, 5])); // 4
console.log(findSequence1([1, 1, 1, 2, 2, 2, 3, 4, 5, 6, 7])); // 6
console.log(findSequence1([1, 2, 1, 2, 1, 2, 1, 2, 3])); // 8