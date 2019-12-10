/*
Longest Common Prefex String

    Details & Examples: https://leetcode.com/problems/longest-common-prefix/
*/

const longestCommonPrefix = strs => {
  if (strs.length === 0) {
    return "";
  }

  let resultString = "";

  strs.sort((a, b) => a.length - b.length);

  for (let i = 0; i < strs[0].length; i++) {
    const tempChar = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (tempChar === strs[j][i]) {
      } else {
        return resultString;
      }
    }
    resultString += tempChar;
  }

  return resultString;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefix([])); // ""
