### Pseudo code for DFS

```
# variables
n = number of nodes in the graph
g = adjacency list representing graph

# an array of size n to represent visited status of node as per their index
visited = [false, false, …, false]

function dfs(at):
  # return if already visited
  if visited[at]: return

  # mark corresponding value in visited array to true
  visited[at] = true
  
  # get all the neighbors for current node and run dfs for all of them
  neighbors = graph[at]
  for next in neighbors:
    dfs(next)

# Start the DFS function at node zero
start_node = 0
dfs(start_node)

```
