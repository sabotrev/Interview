/*
Word Search

    Description: You are given a 2D array of characters, and a target string. Return whether or not
        the word target word exists in the matrix. Unlike a standard word search, the word must be
        either going left-to-right, or top-to-bottom in the matrix.

    Example:
        input: matrix = [['F', 'A', 'C', 'I'],
                        ['O', 'B', 'Q', 'P'],
                        ['A', 'N', 'O', 'B'],
                        ['M', 'A', 'S', 'S']]
                word = 'FOAM'
        output: true
*/

/*
Brute Force
    
    Time: O(n^2)
    Space: 0(n^2)
*/
const wordSearch = (matrix, word) => {
    let wordList = [];

    for (let i = 0; i < matrix.length; i++) {
        let wordLeftToRight = '';
        let wordTopToBottom = '';
        for (let j = 0; j < matrix[i].length; j++) {
            wordLeftToRight += matrix[i][j];
            wordTopToBottom += matrix[j][i];
            wordList.push(wordLeftToRight);
            wordList.push(wordTopToBottom);
        }
    }

    return wordList.includes(word);
}

const matrix =
    [['F', 'A', 'C', 'I'],
    ['O', 'B', 'Q', 'P'],
    ['A', 'N', 'O', 'B'],
    ['M', 'A', 'S', 'S']];
console.log(wordSearch(matrix, 'FOAM')); // true
console.log(wordSearch(matrix, 'TEST')); // false