/*
Recursive String Permutation

Description:
    Write a recursive function for generating all permutations of an input string. Return them as
    a set.

Example:
    input: cat
    output: cat cta atc act tac tca
*/


const recursivePermutation = str => {

    if (str <= 1) {
        return new Set([str])
    }

    const allCharsExceptLast = str.slice(0, -1);
    const lastChar = str[str.length - 1];
  
    const permutationsOfAllCharsExceptLast = recursivePermutation(allCharsExceptLast);
  
    const permutations = new Set();
    permutationsOfAllCharsExceptLast.forEach(permutationOfAllCharsExceptLast => {
      for (let position = 0; position <= allCharsExceptLast.length; position++) {
        const permutation = permutationOfAllCharsExceptLast.slice(0, position) + lastChar + permutationOfAllCharsExceptLast.slice(position);
        permutations.add(permutation);
      }
    });
  
    return permutations;
}

console.log(recursivePermutation("cat"));