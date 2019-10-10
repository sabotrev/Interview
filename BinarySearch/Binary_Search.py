# Binary Search
#   Description & Examples: https://leetcode.com/problems/binary-search/

from typing import List


# Iteration
#   Time: O(log(n))
#   Space: O(1)
class Solution:
    def search(self, nums: List[int], target: int) -> int:

        left = 0
        right = len(nums) - 1

        while left < right:
            mid_index = left + (right - left) // 2
            mid_val = nums[mid_index]

            if target < mid_val:
                right = mid_index - 1
            elif target > mid_val:
                left = mid_index + 1
            else:
                return mid_index

        return -1


print(Solution.search(Solution, [-1, 0, 3, 5, 9, 12], 9))  # 4
print(Solution.search(Solution, [-1, 0, 3, 5, 9, 12], 2))  # -1
