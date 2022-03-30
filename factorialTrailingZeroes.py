def trailing_zeroes(n):
  # 0s are produced when 2 and 5 are multiplied
  # so you'll need to count how many 2s and 5s are there
  # 2s are always more than 5s so count just 5s
  res = 0
  k = 5

  # find all powers of 5
  # 25 has 2 5s, 125 has 3 5s, etc
  while k <= n:
    res += n // k
    k *= 5

  return res