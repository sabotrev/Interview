/*
Mutations: Four Letter Words

    Description & Examples: https://www.codewars.com/kata/four-letter-words-mutations/train/javascript
*/

function mutations(alice, bob, word, first) {
    const aliceCpy = [...alice];
    const bobCpy = [...bob];
    const usedWords = [];

    // Initial word has no match
    if (findMatch(aliceCpy, word) === -1 && findMatch(bobCpy, word) === -1) {
        return -1;
    } else {
        while (true) {
            // put words already used
            usedWords.push(word);

            if (first) {
                const wordIndex = findMatch(bobCpy, word);
                if (wordIndex === -1) {
                    return 0; // no match, Alice wins
                } else {
                    // there is a match... this is the word
                    word = bobCpy[wordIndex];

                    // check if that word has been used.. if so return Alice (0)
                    if (usedWords.includes(word) || hasDups(word)) {
                        return 0;
                    } else {
                        // get rid of that word
                        bobCpy.splice(wordIndex, 1);

                        // now set it to Alice's turn
                        first = 0;
                    }
                }
            } else {
                const wordIndex = findMatch(aliceCpy, word);
                if (wordIndex === -1) {
                    return 1; // no match, Bob wins
                } else {
                    // there is a match... this is the word
                    word = aliceCpy[wordIndex];

                    // check if that word has been used.. if so return Alice (0)
                    if (usedWords.includes(word) || hasDups(word)) {
                        return 0;
                    } else {
                        // get rid of that word
                        aliceCpy.splice(wordIndex, 1);

                        // now set it to Bob's turn
                        first = 1;
                    }
                }
            }
        }
    }

}

const findMatch = (arr, word) => {

    for (let i = 0; i < arr.length; i++) {
        let sum = arr[i].split('').reduce((acc, val, j) => {
            if (val === word[j]) {
                acc++;
            }
            return acc;
        }, 0);

        if (sum === 3) {
            return i;
        }
    }

    return -1;
}

const hasDups = (str) => {
    const map = {};
    for (let i = 0; i < str.length; i++) {
        if (map.hasOwnProperty(str[i])) {
            return true;
        } else {
            map[str[i]] = true;
        }
    }

    return false;
}

const alice = ['plat', 'rend', 'bear', 'soar', 'mare', 'pare', 'flap', 'neat', 'clan', 'pore'],
bob = ['boar', 'clap', 'farm', 'lend', 'near', 'peat', 'pure', 'more', 'plan', 'soap'];

console.log('maze: ' + mutations(alice, bob, 'maze', 0)); // 0
console.log('send: ' + mutations(alice, bob, 'send', 0)); // 1
console.log('boat: ' + mutations(alice, bob, 'boat', 0)); // 1
console.log('apse: ' + mutations(alice, bob, 'apse', 0)); // -1
console.log('neat: ' + mutations(alice, bob, 'neat', 1)); // 1
console.log('soar: ' + mutations(alice, bob, 'soar', 1)); // 0
console.log('mark: ' + mutations(alice, bob, 'mark', 1)); // 0
console.log('calm: ' + mutations(alice, bob, 'calm', 1)); // -1
