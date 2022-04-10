
// brute force
var calPoints = function(ops) {
  const resArr = [];
  for (const op of ops) {
    if (op === "+") {
      resArr.push(Number(resArr[resArr.length - 1]) + Number(resArr[resArr.length - 2]))
    } else if (op === "C") {
      resArr.pop()
    } else if (op === "D") {
      resArr.push(2 * Number(resArr[resArr.length - 1]))
    } else {
      resArr.push(op);
    }
  }
  console.log(resArr);
  return resArr.reduce((p, c) => Number(p) + Number(c), 0);
}

const r = calPoints(["5","2","C","D","+"])

console.log(r);

var calPointsNew = function(ops) {
  let sum = 0, score_arr = [];
  for(const element of ops){
      switch(element){
          case '+':
              sum += score_arr[score_arr.push(score_arr[score_arr.length-1] + score_arr[score_arr.length-2])-1];;
              break;
          case 'C':
              sum -= score_arr.pop();
              break;
          case 'D':
              sum += score_arr[score_arr.push(score_arr[score_arr.length-1] * 2)-1];
              break;
          default:
              sum += score_arr[score_arr.push(parseInt(element))-1];
      }
  }
  return sum;
};

// fast execution with stack and even faster with vector
