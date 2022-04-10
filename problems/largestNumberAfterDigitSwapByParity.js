// Largest Number After Digit Swaps by Parity

var largestInteger = function(num) {
  let max = Number(num);
  let res = String(num).split('');
  for (let i =0; i < res.length; i++) {
      
      for (let j = i + 1; j < res.length; j++) {
          
          if (res[i] < res[j]) {
              if (res[i] % 2 == res[j] % 2) {
                  let t = res[i];
                  res[i] = res[j];
                  res[j] = t;
                  console.log(res);
                  const cs = Number(res.join(''))
                  if (cs > Number(max)) {
                      max = cs;
                  }
                  
              }
          }
      }
  }
  return Number(max)
};

const r = largestInteger(1234);

console.log(r);
