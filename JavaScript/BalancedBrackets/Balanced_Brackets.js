/*
Balanced Brackets

    Description:
        You are given an array of strings. Each of these strings is made up of bracket characters
        only: '(', ')', '{',  '}',  '[',  ']'.

        The following rules are always followed :
            1. Every opening bracket has a corresponding closing bracket : '(' with ')',
                '{' with '}', and '[' with ']'.
            2. Two brackets form a pair if they have no open bracket of any type between them.
            3. For example: '[}]' is invalid, '[{}]' is valid.
            4. The closing bracket of a pair must be of the same type as the opening bracket,
                e.g. '( )' is valid, but '[ )' is not valid.
        
        Determine if of the strings of brackets in the input array are valid or invalid by these
        criteria.


    Example:
        input: ([)]
        output: false

        input: ()
        output: true
*/


const isBalanced = (str) => {

    if (str.length <= 1) {
        return false;
    }

    const stack = [];

    for (char of str) {
        if (isOpenBracket(char)) {
            stack.push(char);
        } else {
            if (stack.length === 0 || !doesMatch(stack.pop(), char)) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

const isOpenBracket = (bracket) => {
    return ['[', '{', '('].includes(bracket);
}

const doesMatch = (openChar, closeChar) => {
    const tokens = [['(', ')'], ['{',  '}'],  ['[',  ']']];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i][0] === openChar) {
            return tokens[i][1] === closeChar;
        }
    }

    return false;
}

console.log(isBalanced('()')); // true
console.log(isBalanced('([)]')); // false
console.log(isBalanced('[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]')) // true