# !/usr/bin/env python

import matplotlib.pyplot as plt
import random

def random_point():
    return (random.randint(-100, 100), random.randint(-100, 100))

def roll_dice():
    return random.randint(1, 6)

p1 = random_point()
p2 = random_point()
p3 = random_point()
p4 = random_point()

def mid(x, y):
    return (x[0]*0.5+y[0]*0.5, x[1]*0.5+y[1]*0.5)

fig = plt.figure()

for i in range(100):
    dice = roll_dice()
    if dice == 1 or dice == 2:
        new_point = mid(p4, p1)
    elif dice == 3 or dice == 4:
        new_point = mid(p4, p2)
    else:
        new_point = mid(p4, p3)
    p4 = new_point
    plt.plot()

