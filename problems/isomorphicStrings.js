/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function(s, t) {
  const charMap = new Map();

  const cSet = new Set();
  const vSet = new Set();
  
  for (let i = 0; i < s.length; i++) {
    if (charMap.has(s[i]) && charMap.get(s[i]) !== t[i]) {
      return false;
    } else {
      charMap.set(s[i], t[i]);
      cSet.add(s[i]);
      vSet.add(t[i]);
    }
  }
  if (cSet.size !== vSet.size) {
    return false;
  }
  return true;
};

console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('foo', 'bar'));
console.log(isIsomorphic('badc', 'baba'));

// var i = str.length;
// while (i--) {
//   alert(str[i]);
// }