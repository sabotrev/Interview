/*
Check Permutation

Description:
    Given two strings, write a method to decide if one is a permutation of the other.

Notes: Is it case sensitive? Is white space significant?

Example:
    input: str1 = 'dog'
        str2 = 'god'
    output: true
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

/*
Set

    Time: O(n)
    Space: O(1)
 */
function checkPermutation2(str1, str2) {
    if (!str1 || !str2 || (str1.length !== str2.length)) {
        return false;
    }

    let set1 = new Set(str1);
    let set2 = new Set(str2);

    for (let char of set1) {
        if (!set2.has(char)) {
            return false;
        }
    }

    return true;
}

console.log(checkPermutation2('dog', 'god'));
console.log(checkPermutation2('dog', 'ogg'));