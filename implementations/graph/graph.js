/*
   1  2  3  4
1  0  1  1  0
2  0  0  1  1
3  0  0  0  0
4  0  0  1  0
*/
const adjacencyMatrix = [
  [false, true, true, false],
  [false, false, true, true],
  [false, false, false, false],
  [false, false, true, false],
];


/*
// adjacency list
1 -> [2, 3]
2 -> [3, 4]
3 -> []
4 -> [3]
*/
const adjacencyList = new Map();
adjacencyList.set(1, new Set([2,3]));
adjacencyList.set(2, new Set([3,4]));
adjacencyList.set(3, new Set());
adjacencyList.set(4, new Set([3]));


const visit = console.log;

const visited = new Set();
const dfs = node => {
  visit(node);
  visited.add(node);
  for (let neighbour of adjacencyList.get(node)) {
    if (!visited.has(neighbour)) {
     dfs(neighbour);
    }
  }
};

const bfs = (startNode) => {
  const visited = new Set();
  const queue = [];
  queue.push(startNode);
  visited.add(startNode);

  while (queue.length > 0) {
    const currentNode = queue.shift();
    visit(currentNode);

    for (let neighbour of adjacencyList.get(currentNode)) {
      if (!visited.has(neighbour)) {
        queue.push(neighbour);
        visited.add(neighbour);
      }
    }
  }
};
