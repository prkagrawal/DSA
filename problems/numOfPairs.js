/**
 * @param {number[]} nums
 * @return {number[]}
 */
const numberOfPairs = function(nums) {
    let p = 0;

    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
      if (numMap.has(nums[i])) {
        numMap.set(nums[i], numMap.get(nums[i]) + 1);
      } else {
        numMap.set(nums[i], 1);
      }
    }

    for (const value of numMap.values()) {
      p = p + Math.floor(value/2);
    }

    return [p, nums.length - 2*p];
};

console.log(numberOfPairs([1, 3, 1, 5, 4]));
console.log(numberOfPairs([1, 3, 1, 5, 1, 3, 1, 5, 4]));