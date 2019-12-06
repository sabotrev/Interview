"""
Find All Duplicates in an Array

	Details & Examples: https://leetcode.com/problems/find-all-duplicates-in-an-array/
"""
from typing import List


class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        outputArr: List[int] = []
        for i in range(0, len(nums)):
            index = abs(nums[i]) - 1
            if (nums[index] < 0):
                outputArr.append(index + 1)
            nums[index] = -nums[index]
        return outputArr


solution = Solution()
print(solution.findDuplicates([4, 2, 1, 4, 1]))
# print(solution.findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]))  # [2, 3]
