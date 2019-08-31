/*
Check Permutation

Description:
    Given two strings, write a method to decide if one is a permutation of the other.

Notes: Is it case sensitive? Is white space significant?

Example:
    input: num = 7
    output: true

    input: num = 237
    output: false
*/


/*
Sort with spread

    Time: O(n log(n))
    Space: O(1)
 */
function checkPermutation1(str1, str2) {

    if (!str1 || !str2 || (str1.length !== str2.length)) {
        return false;
    }

    return [...str1].sort().join`` === [...str2].sort().join``;
}

console.log(checkPermutation1('dog', 'god'));
console.log(checkPermutation1('dog', 'ogg'));