/*
Zig Zag Conversion

    Description & Examples: https://leetcode.com/problems/zigzag-conversion/
*/



function convert(s, numRows) {
    if (s.length == 0 || numRows == 1) {
        return s;
    }

    const rowArray = [];

    for (var i = 0; i < numRows; i++) {
        rowArray[i] = [];
    }

    let row = 0;
    let down = false;

    for (var i = 0; i < s.length; i++) {
        var currentChar = s[i];

        if (currentChar !== ' ') {
            rowArray[row].push(s[i]);
        }

        if (row === numRows - 1) {
            down = false;
        } else if (row === 0) {
            down = true;
        }

        down ? row++ : row--;
    }

    // OR return [].concat.apply([], rowArray).join("");
    return rowArray.flat().join("")
}


console.log(convert('PAYPALISHIRING', 4)); // PINALSIGYAHRPI
console.log(convert('PAYPALISHIRING', 3)); // PAHNAPLSIIGYIR
console.log(convert('PAYPALISHIRING', 2)); // PYAIHRNAPLSIIG
console.log(convert('PAYPALISHIRING', 1)); // PAYPALISHIRING