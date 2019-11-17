"""
Reverse Integer

	Details & Examples: https://leetcode.com/problems/reverse-integer/
"""


class Solution:
    def reverse(self, x: int) -> int:
        res = (-1 * int(str(x)[1::][::-1])) if x < 0 else int(str(x)[::-1])
        if (res <= -2**31 or res >= (2**31 - 1)):
            res = 0
        return res


solution = Solution()
print(solution.reverse(123))
print(solution.reverse(120))
print(solution.reverse(-123))
print(solution.reverse(1534236469))
