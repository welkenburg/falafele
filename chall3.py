inputFile = "i.txt"

class Enemy:
	def __init__(self, Id, Hp, X, Y):
		self.id = Id
		self.health = Hp
		self.x = X
		self.y = Y

	def to_json(self):
		return {
			"id" : self.id,
			"health" : self.health,
			"x" : self.x,
			"y" : self.y
		}

	def next(self, R):
		self.x -= 1
		if self.x < 0:
			self.x += R

	def shoot(self, Damage, DamageReduc):
		totalDamage = Damage - DamageReduc * self.x 
		self.health -= totalDamage * (totalDamage > 0)
		return self.health
		
def NbrOfShoots(Row, Column, Enemies, ShotsPerRound, Damage, DamageReduc):
	shots = 0
	while Enemies:
		Enemies.sort(key=lambda e: (e.x, e.health))
		for i in range(ShotsPerRound):
			if not Enemies:
				return shots
			if Enemies[0].shoot(Damage, DamageReduc) <= 0:
				Enemies.pop(0)
			#print(f"hitting {Enemies[0].to_json()}")
			shots += 1
		for e in Enemies:
			print(e.to_json())
			e.next(Row)
		print("-----next turn-----\n\n")
	return shots

output = open("out.txt", "a")

with open(inputFile, "r") as cases:
		lines = cases.readlines()
		T = int(lines[0])
		stack = 1
		case = 0
		while stack < len(lines):
			R, C, N, S, D, H = map(int, lines[stack].split(" "))
			stack += 1
			enemies = []
			for i in range(N):
				Id, He, X, Y = map(int, lines[stack + i].split(" "))
				enemies.append(Enemy(Id, He, X, Y))
			stack += N
			case += 1
			#print(f"row:{R} column:{C} SPR:{S} Damage:{D} DamageR:{H}")
			output.write(f"Case #{case}: {NbrOfShoots(R, C, enemies, S, D, H)}\n")

output.close()