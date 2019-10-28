/*
Missing Integers

Description:
    Given a list of ordered integers with some of the numbers missing
    (and with possible duplicates), find the missing numbers.

Example:
    input: [1, 3, 3, 3, 5, 6]
    output: 2, 4
*/


const missingIntegers = (integers) => {
    const missed = [];
    integers.forEach((_, index) => {
        if (!integers.includes(index + 1)) {
            missed.push(index + 1);
        }
    })
    return missed;
}

console.log(missingIntegers([1, 3, 3, 3, 5, 6])); // 2, 4
console.log(missingIntegers([1, 2, 3, 4, 4, 7, 7])); // 5, 6