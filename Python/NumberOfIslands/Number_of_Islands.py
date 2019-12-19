"""
Reverse Integer

	Details & Examples: https://leetcode.com/problems/number-of-islands/
"""
from typing import List


class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        if (not grid or len(grid) == 0):
            return 0

        count = 0
        for x in range(len(grid)):
            for y in range(len(grid[x])):
                if grid[x][y] == 1:
                    self.findNeighbors(grid, x, y)
                    count += 1

        return count

    # DFS
    def findNeighbors(self, grid, i, j):
        if i < 0 or j < 0 or i >= len(grid) or j >= len(grid[0]) or grid[i][j] != 1:
            return
        grid[i][j] = 0
        self.findNeighbors(grid, i - 1, j)
        self.findNeighbors(grid, i + 1, j)
        self.findNeighbors(grid, i, j - 1)
        self.findNeighbors(grid, i, j + 1)


solution = Solution()
print(solution.numIslands([[1, 1, 1, 1, 0],
                           [1, 1, 0, 1, 0],
                           [1, 1, 0, 0, 0],
                           [0, 0, 0, 0, 0]]))  # 1
print(solution.numIslands([[1, 1, 0, 0, 0],
                           [1, 1, 0, 0, 0],
                           [0, 0, 1, 0, 0],
                           [0, 0, 0, 1, 1]]))  # 3
