def stringPatternSearch(text,pattern):
  n = len(text)
  m = len(pattern)
  count = 0
  for i in range(n - m + 1):
    for j in range(m):
      if pattern[j] != text[i+j]:
        break
      if j == m-1 :
        count = count + 1
  print(count)

stringPatternSearch("lololo","lol")     # 2
stringPatternSearch("lololol","lol")    # 3
stringPatternSearch("lol","lol")        # 1
stringPatternSearch("olooo","lol")      # 0