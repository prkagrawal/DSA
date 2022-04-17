n,t = map(int,input().split())
s = str(input())

l = list(s)
z = len(s) - 1
for i in range(t):
  for a in range(z):
    if l[a]=='B' and l[a+1]=='G':
      l[a] = 'G'
      l[a+1] = 'B'
      a = a + 1
    
s = ''.join(l)
print(s)
