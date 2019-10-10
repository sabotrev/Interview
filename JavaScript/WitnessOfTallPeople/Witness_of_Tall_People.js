/*
Witness of Tall People

    Description:
        There are n people lined up, and each have a height represented as an integer. A murder has
        happened right in front of them, and only people who are taller than everyone in front of
        them are able to see what has happened. How many witnesses are there?

    Example:
        input: heights = [3, 6, 3, 4, 1]  
        output: 2
        explanation: Only [6, 4] were able to see in front of them.
*/


/*
With filter
 */
const witnesses = (heights) => {
    return heights.filter((witness, index) => {
        if (index === 0) return;
        return witness > heights[index - 1] && witness > heights[index + 1];
    }).length;
}

console.log(witnesses([3, 6, 3, 4, 1])); // 2 -> [6, 4]
console.log(witnesses([2, 3, 1, 5, 4, 9, 8, 7, 5])); // 3 -> [3, 5, 8]