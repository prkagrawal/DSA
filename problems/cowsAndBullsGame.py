import random

t = str(random.randint(1000,9999))

def check():
  k = str(input("Enter a four digit number : "))
  if k == t:
    print("Correct : Game Over")
    return
  elif k != t: 
    for a in range(4):
      if k[a]==t[a]:
        print("cow")
      elif k[a] != t[a]:
        print("bull")
  return check()

check()

# Anyone can complete this game in maximum 10 turns.