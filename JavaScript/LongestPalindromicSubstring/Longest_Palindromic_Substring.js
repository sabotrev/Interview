/*
Longest Palindromic Substring

Description:
    Given a string, find the longest substring which is palindrome.

Example:
    input: bananas
    output: anana

    input: abccbd
    output: bccb
*/


/*
    Time: O(n^2)
    Space: O(n)
*/
const longestPalindromicSubstring = (str) => {
    if (!str || str.length <= 1) {
        return s;
    }

    if (str.length % 2 === 0) {
        // If string.length is even then add arbitrary character to make it odd
        str = '$' + str.split('').join('$') + '$';
    }

    let longest = str.substring(0, 1)
    for (let i = 0; i < str.length; i++) {

        let temp = findPalindrome(str, i, i)
        if (temp.length > longest.length) {
            longest = temp;
        }
    }

    return longest.replace(/\$/g, '');
}


const findPalindrome = (str, begin, end) => {
    while (begin >= 0 && end <= str.length - 1 && str[begin] === str[end]) {
        begin--;
        end++;
    }

    return str.substring(begin + 1, end)
}

console.log(longestPalindromicSubstring('bananas')); // anana
console.log(longestPalindromicSubstring('abccbd')); // bccb