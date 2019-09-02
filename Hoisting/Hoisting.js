/*
Hoisting

    Description: What's the output in the log message?

    Notes: `var`'s are hoisted to the nearest function level scope. `if`'s are not functions. `let`
        and `const` are block scope and NOT hoisted.
*/

var fruit = "apple";
let vegtable = "avocado";
const nut = "almond";

if (true) {
    var fruit = "bananas";
    let vegtable = "broccli";
    const nut = "cashew";
}

console.log(fruit); // bananas
console.log(vegtable); // avocado
console.log(nut); // almond
