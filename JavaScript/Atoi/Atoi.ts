/*
Atoi

    Details & Examples: https://leetcode.com/problems/string-to-integer-atoi/
*/


const atoi = (str: string): number => {
    let result: number = 0;
    str = str.trimLeft();
    str = str.split(" ")[0];

    let i = 0;
    if (str[0] === '-' || str[0] === '+') {
        i = 1;
    }
    for (i; i < str.length; i++) {
        if (isNaN(+str[i])) {
            str = str.slice(0, i);
            break;
        }
    }

    if (+str >= (Math.pow(2, 31) - 1)) {
        result = Math.pow(2, 31) - 1;
    } else if (+str <= (-1 * Math.pow(2, 31))) {
        result = -1 * Math.pow(2, 31);
    } else if (isNaN(+str)) {
        result = 0;
    } else {
        result = +str;
    }

    return result;
}

console.log(atoi("42")); // 42
console.log(atoi("   -42")); // -42
console.log(atoi("4193 with words")); // 4193
console.log(atoi("words and 987")); // 0
console.log(atoi("-91283472332")); // -2147483648
console.log(atoi("  -0012a42")); // 12
console.log(atoi("+1")); // 12