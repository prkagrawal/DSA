k,n,w = str(input()).split()
k = int(k)
n = int(n)
w = int(w)
mn = 0
for i in range(w):
  mn = mn + (i+1)*k
if n<mn: 
  print(mn-n)
else:
  print(0)