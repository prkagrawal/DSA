def leafSum(node):
  # Handle empty tree case
  if node == null:
    return 0
  
  if isLeaf(node):
    return node.getValue()
  
  total = 0
  for child in node.getChildNodes():
    total += leafSum(child)
  return total

def isLeaf(node):
  return node.getChildNodes().size() == 0
