# The height is number of edges from the root to lowest leaf.
def treeHeight(node):
  # if tree is empty
  if node == null:
    return -1

  # Identify leaf nodes and return zero (this line is optional, function will work just fine without this as well)
  if node.left == null and node.right == null:
    return 0

  return max(treeHeight(node.left), treeHeight(node.right)) + 1
