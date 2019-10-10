/*
Palindrome Permutation

    Description: Give a string, write a function to check if it is a permutation of a palindrome.
        A palindrome is a word or phrase that is the same forwards and backwards. A permutation is
        a rearrangement of letters. The palindrome does not need to be limited to just dictionary
        words. You can ignore casing and non-letter characters.


    Example:
        input: str = 'Tact Coa'
        output: true (permutations: 'taco cat', 'atco cta', etc.)
*/


/*
Brute force with Hash map

    Time: O(n^2)
    Space: O(n)
*/
const palindromePermutation1 = (str) => {
    str = str.toLowerCase();
    let hashMap = {};

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            if (!hashMap.hasOwnProperty(str[i])) {
                hashMap[str[i]] = 1;
            } else {
                hashMap[str[i]]++;
            }
        }
    }

    let moreThanOneOdd = 0;

    for (let char in hashMap) {
        if (hashMap[char] % 2 !== 0) {
            moreThanOneOdd++;
        }
    }

    return moreThanOneOdd <= 1;
};

console.log(palindromePermutation1('Tact Coa'));


/*
Set

    Time: O(n)
    Space: O(n)
*/
const palindromePermutation2 = (str) => {
    if (!str) return false;

    str = str.toLowerCase();

    const letterSet = new Set();
    for (const letter of str) {
        if (letter !== ' ') {
            if (letterSet.has(letter)) {
                letterSet.delete(letter);
            } else {
                letterSet.add(letter);
            }
        }
    }

    return letterSet.size <= 1;
};

console.log(palindromePermutation2('Tact Coa'));