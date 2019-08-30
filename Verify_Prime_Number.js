/*
Verify Prime Number

Description:
    How would you verify a prime number?

Example:
    input: num = 7
    output: true

    input: num = 237
    output: false
*/


/*
Brute Force: while loop

    Time: O(n^2)
*/
function isPrime1(num) {
    let divisor = 2;

    while (num > divisor) {
        if (num % divisor === 0) {
            return false;
        } else {
            divisor++; 
        }
    }

    return true;
}

console.log(isPrime1(7)); // true
console.log(isPrime1(237)); // false

/*
Brute Force: for loop

    Time: O(n^2)
*/
function isPrime2(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return num > 1;
}

console.log(isPrime2(7)); // true
console.log(isPrime2(237)); // false

/*
Brute Force: square root

    Time: O(sqrt(num))

    Notes: A number will never be divisible by a number more than half of it or a third of it.
*/
function isPrime3(num) {
    let divisor = 3;
    let limit = Math.sqrt(num);

    if (num === 2 || num === 3) {
        return true;
    }
    if (num % 2 === 0) {
        return false;
    }

    while (divisor <= limit) {
        if (num % divisor === 0) {
            return false;
        } else {
            divisor += 2
        }
    }

    return true;
}

console.log(isPrime3(7)); // true
console.log(isPrime3(237)); // false