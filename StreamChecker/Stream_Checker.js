/*
Stream Checker

    Description:
        Implement the StreamChecker class as follows:
            StreamChecker(words): Constructor, init the data structure with the given words.
            query(letter): returns true if and only if for some k >= 1, the last k characters
                queried (in order from oldest to newest, including this letter just queried) spell
                one of the words in the given list.
*/

/**
 * @param {string[]} words
 */
var StreamChecker = function(words) {
    // TODO: Implement
};

/** 
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
    // TODO: Implement
};

var streamChecker = new StreamChecker(["cd","f","kl"]);
console.log(streamChecker.query('a')); // return false
console.log(streamChecker.query('b')); // return false
console.log(streamChecker.query('c')); // return false
console.log(streamChecker.query('d')); // return true, because 'cd' is in the wordlist
console.log(streamChecker.query('e')); // return false
console.log(streamChecker.query('f')); // return true, because 'f' is in the wordlist
console.log(streamChecker.query('g')); // return false
console.log(streamChecker.query('h')); // return false
console.log(streamChecker.query('i')); // return false
console.log(streamChecker.query('j')); // return false
console.log(streamChecker.query('k')); // return false
console.log(streamChecker.query('l')); // return true, because 'kl' is in the wordlist