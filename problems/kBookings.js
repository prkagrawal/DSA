// Find if k bookings possible with given arrival and departure times

// function areBookingsPossible = (arrival, departure) => {
//   const stack = [];
//   for (let i = 0; i < arrival.length; i++) {
//     while (stack.length > 0 && arrival[i] >= departure[stack[stack.length - 1]]) {
//       stack.pop();
//     }
//     if (stack.length > 0) {
//       res[i] = stack[stack.length - 1] - i;
//     }
//     stack.push(i);
//   }
//   return res;
// }

function areBookingsPossible(a, b, k, n) {
  a.sort();
  b.sort();

  for(let i = 0; i < n; i++) {
    if (i + k < n && a[i + k] < a[i]) {
      return "No";
    }
  }
  return "Yes";
}

let arrival = [ 1, 2, 3 ];
let departure = [ 3, 3, 4 ];
let n = arrival.length;
let k = 1;

const r = areBookingsPossible(arrival, departure, k, n);

console.log(r);

var readLine = require('readline');

console.log(readLine);

function main() {
  var n = parseInt(readLine());
  var strN = n.toString();//<-- Convert int n to string
  for(var i=1;i<=10;i++) {
      process.stdout.write(strN+" x "+i+" = "+n*i);//<-- formatting the 
                                                   //question requires
      process.stdout.write("\n");//<-- newline
  }
}

// main();

var func = function func () {
  console.log(func === func);
  console.log(func)
}

func();
