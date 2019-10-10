/*
    Description and Example:
        https://leetcode.com/problems/container-with-most-water/
*/


const maxArea = (height) => {
	let largestArea = 0;
	let left = 0;
	let right = height.length - 1;

	while (left < right) {
		let area = Math.min(height[left], height[right]) * (right - left);
		if (area > largestArea) {
			largestArea = area;
		}
		if (height[left] <= height[right]) {
			left++;
		} else {
			right--;
		}
	}

  return largestArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49