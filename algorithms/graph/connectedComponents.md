### Connected Components

Q - In a graph find the number of connected components

#### Pseudo code implementation

```
# variables
n = number of nodes in the graph
g = adjacency list representing graph
count = 0
components = [null, null, ..., null] # size n
visited = [false, …, false] #size n

function findComponent()
  for (i = 0; i < n; i++):
    if !visited[i]:
      count++
      dfs(i)
  return (count, components)

function dfs(at):
  visited[at] = true
  components[at] = count

  neighbors = graph[at]
  for next in neighbors:
    if !visited[next]:
      dfs(next)

```