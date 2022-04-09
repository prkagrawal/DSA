/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]
*/




const topKFrequent = function(nums, k) {
  const resMap = new Map();

  for (const element of nums) {
    if (resMap.has(element)) {
      resMap.set(element, resMap.get(element) + 1)
    } else {
      resMap.set(element, 1)
    }
  }

  const sortedMap = new Map([...resMap].sort((a, b) => b[1] - a[1]));

  return Array.from( sortedMap.keys() ).slice(0, k);

}

const r = topFrequent([1,1,1,2,2,3], 2)

console.log(r);
