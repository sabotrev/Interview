/*
Weight for Weight

    Description: 
        My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because
        each month a list with the weights of members is published and each month he is the last
        on the list which means he is the heaviest. I am the one who establishes the list so I told
        him: "Don't worry any more, I will modify the order of the list". It was decided to
        attribute a "weight" to numbers. The weight of a number will be from now on the sum of its
        digits. For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100
        will come before 99. Given a string with the weights of FFC members in normal order can you
        give this string ordered by "weights" of these numbers?

    Example:
        input: str = '2000 10003 1234000 44444444 9999 11 11 22 123'
        output: '11 11 2000 10003 22 123 1234000 44444444 9999'
*/

// Helper
const flatAll = (arr) => {
    return arr.reduce((acc, val) => {
        return Array.isArray(val) ? acc.concat(flatAll(val)) : acc.concat(val)
    }, []);
}

/*
Using map, for map, and reduce
*/
const orderWeight = (str) => {
    const arr = str.split` `;
    let weightMap = {};

    for (let i = 0; i < arr.length; i++) {
      let sum = arr[i].split``.reduce((acc, val) => acc + parseInt(val), 0);
      if (weightMap.hasOwnProperty(sum)) {
        weightMap[sum].push(arr[i]);
        weightMap[sum].sort();
      } else {
        weightMap[sum] = [arr[i]];
        weightMap[sum].sort();
      }
    }

    return flatAll(Object.values(weightMap)).join` `;
    // return Object.values(weightMap).flat(Infinity).join ``;
}

console.log(orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123')); // '11 11 2000 10003 22 123 1234000 44444444 9999'