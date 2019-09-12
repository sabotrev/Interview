/*
Digital Root

    Description:
        A digital root is the recursive sum of all the digits in a number. Given n, take the sum of
        the digits of n. If that value has more than one digit, continue reducing in this way until
        a single-digit number is produced. This is only applicable to the natural numbers.

    Example:
        input: 16
        output: 7
        explanation: 1 + 6 = 7

        input: 493193
        output: 2
        explanation:
            4 + 9 + 3 + 1 + 9 + 3 = 29
            2 + 9 = 11
            1 + 1 = 2
*/


/*
Recursively with reduce
*/
function digital_root(n) {
    let temp = n.toString().split('').reduce((acc, val) => acc + parseInt(val), 0);
    if (temp.toString().length > 1) {
      return digital_root(temp);
    }
    return temp;
  }

  console.log(digital_root(16)); // 7
  console.log(digital_root(942)); // 6
  console.log(digital_root(132189)); // 6
  console.log(digital_root(493193)); // 2