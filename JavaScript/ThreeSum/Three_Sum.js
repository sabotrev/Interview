const twoSum = (nums, target) => {
  const previousValuesMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    // `complement` will hopefully be some key in the map
    const complement = target - nums[i];

    if (previousValuesMap.has(complement)) {
      return [complement, nums[i]];
    }

    // previousValuesMap[`value in the array`] = `index`
    previousValuesMap.set(nums[i], i);
  }

  return null;
};

const threeSum = nums => {
  const solution = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let target = 0;
    target = nums[i] < 0 ? Math.abs(nums[i]) : -1 * nums[i];

    const numsCopy = [...nums];
    numsCopy.splice(i, 1);
    const twoSumSolution = twoSum(numsCopy, target);

    if (twoSumSolution) {
      const completeSolution = [nums[i], ...twoSumSolution].sort();
      if (!solution.toString().includes(completeSolution)) {
        solution.push(completeSolution);
      }
    }
  }

  return solution;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [ [-1, 0, 1], [-1, -1, 2]] ]
