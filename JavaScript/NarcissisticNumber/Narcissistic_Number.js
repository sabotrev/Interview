/*
Narcissistic Number

Description:
    A Narcissistic Number is a number which is the sum of its own digits, each raised to the power
    of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal
    (base 10).

Example:
    input: 153
    output: true
    explanation: 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
*/


/*
With reduce
*/
const narcissisticNumber1 = (num) => {
    let exponent = [...num.toString()].length;
    let sum = [...num.toString()].reduce((acc, val) => {
        return acc + Math.pow(parseInt(val), exponent);
    }, 0);

    return num === sum;
}

console.log(narcissisticNumber1(7)); // true
console.log(narcissisticNumber1(153)); // true
console.log(narcissisticNumber1(27)); // false