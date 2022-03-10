inputFile = "i.txt"

def computeNumberDays(NbPlayers, MaxDays, PlayerIncrements):
  # Do stuff here
  counter = 0
  for i in range(MaxDays):
    counter += 1
    for j in PlayerIncrements:
      if i % j != 0:
        counter -= 1
        break
    
  return counter

output = open("out.txt", "a")

with open(inputFile, "r") as cases:
    lines = cases.readlines()
    T = int(lines[0])
    for i in range((len(lines)-1)//2):
        N, M    = map(int,lines[1 + i*2 + 0].split(" "))
        P  = list(map(int, lines[1+ i*2 + 1].split(" ")))
        output.write(f"Case #{i+1}: {computeNumberDays(N,M,P)}\n")

output.close()