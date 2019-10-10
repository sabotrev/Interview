/*
Longest Common Subsequence

    Description:
        The longest common subsequence (LCS) problem is the problem of finding the longest
        subsequence common to all sequences in a set of sequences (often just two sequences). It
        differs from the longest common substring problem: unlike substrings, subsequences are not
        required to occupy consecutive positions within the original sequences.

    Example:
        input: str1 = ABCDGH
            str2 = AEDFHR
        output: 3
        explanation: ADH
*/

/*
Loops
*/
const lcs = (str1, str2) => {
    const m = str1.length;
    const n = str2.length;
    const l = [];

    for (let i = 0; i <= m; i++) {
        l[i] = [];
        for (let j = 0; j <= n; j++) {
            l[i][j] = 0;
        }
    }
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i] === str2[j]) {
                l[i][j] = l[i - 1][j - 1] + 1;
            } else {
                const a = l[i - 1][j];
                const b = l[i][j - 1];
                l[i][j] = Math.max(a, b);
            }
        }
    }
    return l[m][n];
}

console.log(lcs('ABCDGH', 'AEDFHR')); // 3 -> ADH
console.log(lcs('AGGTAB', 'GXTXAYB')); // 4 -> GTAB
console.log(lcs('ABCDAF', 'ACBCF')); // 4 -> ABCF