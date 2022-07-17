/**
 * @param {number[]} nums
 * @return {number}
//  */
// const maximumSum = function(nums) {
//     let max = -1;

//     const numsDigitSum = new Map();

//     for (const element of nums) {
//       const currentNumber = String(element);

//       let currentSum = 0;

//       for (const element of currentNumber) {
//         currentSum += Number(element);
//       }

//       numsDigitSum.set(element, currentSum);
//     }

//     for (let i = 0; i < nums.length; i++) {
//       for (let j = i + 1; j < nums.length; j++) {
//         if (numsDigitSum.get(nums[i]) === numsDigitSum.get(nums[j]) && max < nums[i] + nums[j]) {
//           max = nums[i] + nums[j];
//         }
//       }
//     }

//     return max;
// };


const maximumSum = function(nums) {
  let max = -1;

  const numsDigitSum = new Map();

  function getDigitSum (num) {
    let digitSum = 0;

    while (num > 0) {
      digitSum += num % 10;
      num = Math.floor(num / 10);
    }

    return digitSum;
  }

  for (let num of nums) {
    numsDigitSum.set(num, getDigitSum(num));
  }

  console.log(numsDigitSum);

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (numsDigitSum.get(nums[i]) === numsDigitSum.get(nums[j]) && max < nums[i] + nums[j]) {
        max = nums[i] + nums[j];
      }
    }
  }

  return max;
};

console.log(maximumSum([18,43,36,13,7]));
console.log(maximumSum([10,12,19,14]));
