import random


def gen_scramble():
    moves = ["U", "R", "L", "B", "D", "F"]

    scramble = []

    for _ in range(20):
        rand_num = random.randint(0, 3) == 0

        if rand_num == 0:
            scramble.append(random.choice(moves))
        elif rand_num == 1:
            scramble.append(random.choice(moves) + "2")
        else:
            scramble.append(random.choice(moves) + "'")

    return " ".join(scramble)
