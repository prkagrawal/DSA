n = int(input())
# Part 1
for i in range(n):
  s = []
  for j in range(n):
    if i+j-n >= 0:
      s.append(str(i+j-n))
    else:
      s.append(" ")
  t = s[::-1]
  s.append(str(i))
  s = s + t
  s = ''.join(s)
  print(s)
# Part 2
t = []
s = []
for j2 in range(n):
  s.append(str(j2))
t = s[::-1]
s.append(str(n))
s = s + t
s = ''.join(s)
print(s)
# Part 3
for i3 in range(n):
  s = []
  t = []
  for j3 in range(n):
    if j3-i3-1 >= 0:
      s.append(str(j3-i3-1))
    else:
      s.append(" ")
  t = s[::-1]
  s.append(str(n-1-i3))
  s = s + t
  s = ''.join(s)
  print(s)