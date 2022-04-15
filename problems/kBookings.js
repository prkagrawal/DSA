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
let departure = [ 2, 3, 4 ];
let n = arrival.length;
let k = 1;

const r = areBookingsPossible(arrival, departure, k, n);

console.log(r);
