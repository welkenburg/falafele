inputFile = input()

def computeNumberDays(NbPlayers, MaxDays, PlayerIncrements):
    pass
    return NbDays

output = []

with open(inputFile, "r") as cases:
    lines = cases.readlines()
    T = int(lines[0])
    for i in range((len(lines)-1)/2):
        N, M    = map(int,lines[1 + i*2 + 0].split(" "))
        P       = map(int, lines[1+ i*2 + 1].split(" "))
        output.append(computeNumberDays(N,M,P))

T = 0
S = 0

for i in T:
    print(f"Case #{i}: {S}")