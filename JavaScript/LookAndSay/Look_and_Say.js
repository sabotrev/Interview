/*
Look and Say

    Description:
        A look-and-say sequence is defined as the integer sequence beginning with a single digit in
        which the next term is obtained by describing the previous term. An example is easier to
        understand:
        
        Each consecutive value describes the prior value.

        1      #
        11     # one 1's
        21     # two 1's
        1211   # one 2, and one 1.
        111221 # one 1, one 2, and two 1's.
        312211 # three 1's, two 2's, one 1's

    Example:
        input: n = 5
        output: 111221
*/


const lookAndSay = (n) => {
    var result = '',
    chars = (n + ' ').split(''),
    lastChar = chars[0],
    times = 0;

    chars.forEach(function(nextChar) {
        if (nextChar === lastChar) {
            times++;
        }
        else {
            result += (times + '') + lastChar;
            lastChar = nextChar;
            times = 1;
        }
    });

    return result;
}

(function output(seed, iterations) {
    for (var i = 0; i < iterations; i++) {
        console.log(seed);
        seed = lookAndSay(seed);
    }
})("1", 5); // 111221
