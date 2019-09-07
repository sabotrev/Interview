/*
Is Sorted By

    Description: Given two arrays, return true if the first array is sorted according to the second
        (ordering) array.

    Example:
        input: arr1 = ['cc', 'cb', 'bb', 'ac']
            arr2 = ['c', 'b', 'a']
        output: true
*/


/*
Brute Force
*/
const isSortedBy1 = (arr1, arr2) => {
    let arr1Sorted = [...arr1].sort();
    let arr2Sorted = [...arr2].sort();
    let isArr1Sorted = true;
    let isArr2Sorted = true;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr1Sorted[i]) {
            isArr1Sorted = false;
        }
    }

    for (let j = 0; j < arr2.length; j++) {
        if (arr2[j] !== arr2Sorted[j]) {
            isArr2Sorted = false;
        }
    }

    return isArr1Sorted === isArr2Sorted;
}

console.log(isSortedBy1(['cc', 'cb', 'bb', 'ac'], ['c', 'b', 'a'])); // true
console.log(isSortedBy1(['a','b', 'c'], ['c', 'b', 'a'])); // false

/*
Using Array.prototype.every
*/
const isSortedBy2 = (arr1, arr2) => {
    return arr1.every((element, i) => {
        if (i === 0) return true;
        return arr2.indexOf(element[0]) >= arr2.indexOf(arr1[i-1][0]);
    })
}

console.log(isSortedBy2(['cc', 'cb', 'bb', 'ac'], ['c', 'b', 'a'])); // true
console.log(isSortedBy2(['a','b', 'c'], ['c', 'b', 'a'])); // false