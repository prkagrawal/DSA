/*
  stack
*/

/*
Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
*/

// brute force approach
const dailyTemperatures = function(temperatures) {
  let res = [];
  
  for (let i = 0; i < temperatures.length; i++) {
      if (i === temperatures.length - 1) {
          res = [...res, 0];
          break;
      }
      for (let j = i+1; j < temperatures.length; j++) {
          if (temperatures[j] > temperatures[i]) {
            res = [...res, j - i];
            break;
          } else if (j === temperatures.length - 1 ) {
            res = [...res, 0]
          }
      }
  }
  return res;
};

const res = dailyTemperatures([73,74,75,71,69,72,76,73]);

console.log(res);

// using stack, decreased runtime by ~40%
const dT = (temperatures) => {
  const res = new Array(temperatures.length).fill(0);

  console.log(res)

  // monotonically decreasing stack
  const stack = [];

  for (let i = temperatures.length - 1; i >= 0; i--) {
    // if we have anything in the stack and the current temp value if greater than or equal to popable value from stack
    while (stack.length > 0 && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
      // console.log('popped', stack);
      stack.pop()
    }
    if (stack.length > 0) {
      // console.log('stack', stack)
      res[i] = stack[stack.length - 1] - i
    }
    stack.push(i)
  }

  return res
}

const nres = dT([73,74,75,71,69,72,76,73])

console.log(nres);
