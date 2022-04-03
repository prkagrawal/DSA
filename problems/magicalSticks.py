t = int(input())
while(t>0):
  t = t - 1
  n = int(input())
  if(n==1) :
    print(1)
    continue
  if(n%2==0):
    print(int(n/2))
    continue
  if(n%2==1):
    print(int((n-1)/2) + 1)