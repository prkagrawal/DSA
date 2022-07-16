/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
 const findPaths = function(m, n, maxMove, startRow, startColumn) {
  const memo = new Map();
  const moduloConstant = (Math.pow(10, 9) + 7);

  function helper (m, n, maxMove, startRow, startColumn, memo) {

    if (m === startRow || n === startColumn || startRow < 0 || startColumn < 0) return 1;
  
    if (maxMove === 0) return 0;
    
    if (memo.get(`${startRow}${startColumn}${maxMove}`)) return memo.get(`${startRow}${startColumn}${maxMove}`);
    
    const val = (helper(m, n, maxMove - 1, startRow - 1, startColumn, memo) + helper(m, n, maxMove - 1, startRow, startColumn - 1, memo) + helper(m, n, maxMove - 1, startRow + 1, startColumn, memo) + helper(m, n, maxMove - 1, startRow, startColumn + 1, memo)) % moduloConstant;

    memo.set(`${startRow}${startColumn}${maxMove}`, val);

    return memo.get(`${startRow}${startColumn}${maxMove}`);
  }
  
  return helper(m, n, maxMove, startRow, startColumn, memo);
};

console.log(findPaths(2, 2, 2, 0, 0));

console.log(findPaths(1, 3, 3, 0, 1));