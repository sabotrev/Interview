/*
Longest unique substring

Description:
    Given a string, find the length of the longest substring without repeating characters.

Example:
    input: 'abcabcbb'
    output: 3

    input: 'bbbbb'
    output: 1
*/


/*
Brute force

    Time: O(n)
    Space: O(n)
*/
const longestUniqueSubstring1 = (str) => {
    let uniqueStr = '';
    let max = 0;

    for (let i = 0; i < str.length; i++) {
        if (!uniqueStr.includes(str[i])) {
            uniqueStr += str[i];
            max = uniqueStr.length;
        } else {
            uniqueStr = str[i];
        }

        if (uniqueStr.length > max) {
            max = uniqueStr.length;
            uniqueStr = str[i];
        }
    }

    return max;
}

console.log(longestUniqueSubstring1('abcabcbb')); // 3
console.log(longestUniqueSubstring1('bbbbb')); // 1
console.log(longestUniqueSubstring1('pwwkew')); // 3
console.log(longestUniqueSubstring1('abcdefg')); // 7