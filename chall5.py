T = 1 #T
L = 9 #Premier int de la deuxième ligne (taille carré)
mi,ma = 5,2 #longueur minimale et maximale
infos = [
  [0, 6, 2, 5, 1, 4, 1, 3, 1], #x noir
  [0, 3, 2, 2, 1, 3, 1, 2, 1], #x vert
  [9, 1, 6, 4, 8, 2, 6, 3, 6], #x rouge
  [1, 2, 6, 2, 2, 2, 3, 0, 5], #y noir
  [1, 2, 3, 2, 2, 2, 2, 0, 1], #y vert
  [5, 5, 1, 5, 5, 5, 3, 9, 3], #y rouge
]
response = [["" for i in range(L)] for j in range(L)]

for i in range(L): #check x
  if infos[0][i] == 0: 
    for j in range(L):
      response[j][i] = 0
  #print(i)
  if infos[3][i] == 0: response[i] = [0 for z in range(L)]

for i in range(L):
  #On cherche les col avec 1 seul bateau car c'est donné
  if infos[1][i] == 1:
    #print(infos[1][i])
    t = L - infos[2][i]
    print(t)
    for j in range(L):
      #print(j > t)
      if response[j][i] == 0: break
      response[j][i] = int(j > t)  
      infos[4][j] -= 1
  infos[1][i] -= 1

print(infos[4])
for i in response:
  print(i)