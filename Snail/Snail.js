/*
Snail

    Description & Examples: https://www.codewars.com/kata/snail
*/


const snail = (arr) => {
    if (arr.length === 1) {
        return [...arr[0]];
    }

    let snail = [];

    while (arr.length > 0) {

        // left to right
        snail.push(...arr[0]);
        if (arr[0].length > 0) {
            arr.splice(0, 1);
        }

        // top to bottom
        for (let i = 0; i < arr.length; i++) {
            snail.push(arr[i][arr[i].length - 1]);
            arr[i].splice(arr[i].length - 1, 1);
        }

        // right to left
        if (arr.length > 0 && arr[arr.length - 1].length > 0) {
            let rev = [...arr[arr.length - 1]].reverse();
            snail.push(...rev);
            arr.splice(arr.length - 1, 1);
        }

        // bottom to top
        for (let j = arr.length - 1; j > 0; j--) {
            snail.push(arr[j][0]);
            arr[j].splice(0, 1);
        }
    }

    return snail;
}

const arr1 = [[1]];

const arr2 =[
    [1,2,3],
    [8,9,4],
    [7,6,5]
];

const arr3 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

const arr4 = [
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11]
];

console.log(snail(arr1));
console.log(snail(arr2));
console.log(snail(arr3));
console.log(snail(arr4));