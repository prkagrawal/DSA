# This is a "dynamic programming" (aka dp) question and the solution is "recursive"
# Using loop to make the code run until provided non-acceptable input
while True:
  n = str(input())
  # check if given no is zero
  if n == "0":
    break
  dp = []
  # Make an array with a length len(n)+1 with each element as zero
  # We will use this array 
  for i in range(len(n) + 1):
    dp.append(0)
  # print(dp)
  # dp = [0, 0, 0, 0,....., (n+1)th 0]
  dp[0] = 1
  dp[1] = 1
  # 1. Loop over the given input 
  # 2. If it is a valid single digit number, Copy the previous element's value to the current element (DP[i] = DP[i-1])
  # 3. If it is a valid two digit number, Add the previous to previous element's value to the current element (DP[i] += DP[i-2])

  # In one line : dp[i] = dp[i-1] {if valid single digit number} + dp[i-2] {if current and previous elements make a valid two digit number}
  for i in range(2,len(n)+1):
    if 0 < int(n[i-2]+n[i-1]) <= 26 and n[i-2] != "0":
      if n[i-1] == "0":
        dp[i] = dp[i-2]
        # print(dp)
        # break
      else:
        dp[i] = dp[i-1] + dp[i-2]
        # print(dp)
        # break
    # print(dp)
    # break
    elif n[i-1] != "0" :
      dp[i] = dp[i-1] 
      # print(dp)
      # break
  # print(dp) 
  #Taking last digit from dp array
  print(dp[-1])