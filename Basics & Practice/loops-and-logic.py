# TO PRINT LIST IN WHILE LOOP
i = ["binod", "keshav", "mohit", "vijay"]
j = 0
while j <= len(i):
    print(i[j])
    j = j + 1

# TO PRINT LIST IN FOR LOOP AND END WITH SAYING DONE
a = ["apple", "banana", "grapes", "guava", "watermelon"]
for it in a:
    print(it)
else:
    print("done")

# TO PRINT NO. IN BETWEEN RANGE
for k in range(0, 8):
    print(k)

# USE OF BREAK IN LOOP
for l in range(0, 80):
    print(l)
    if l == 8:
        break

# PASS COMMAND IS USED TO DO NOTHING (basically a null command)
for l in range(0, 80):
    pass

# TO PRINT THE TABLE OF GIVEN NO.
a = int(input("enter no.:"))
for i in range(1, 11):
    print(a, "*", i, "=", a * i)

# TO GREET PERSONS WHOSE NAME START FROM S
l1 = ["neo", "leon", "james", "shreya", "sophia", "steve"]
for item in l1:
    if item.startswith("s"):
        print("good morning,", item)


# PRINTING A TABLE WITH WHILE LOOP
m = int(input("enter no.:"))
o = 1
while o <= 10:
    print(m, "*", o, "=", m * o)
    o = o + 1


# TO CHECK WHETHER THE NO. IS PRIME OR NOT
g = int(input("enter no.:"))
t = 0
for q in range(2, g):
    if g % q == 0:
        t = 1
        break
if t == 1:
    print("not prime")
else:
    print("prime no.")


# SUM OF N NATURAL NO.
num = int(input("enter no.:"))
s = 0
sm = 0
while s <= num:
    sm = sm + s
    s = s + 1
print(sm)


# TO PRINT FACTORIAL OF A NO.
w = int(input("enter no.:"))
mul = 1
for h in range(1, w+1):
    mul = mul * h
print(mul)

# TO PRINT STAR PATTERN
n = 3
for i in range(3):
    print(" " * (n-i-1), end="")
    print("*" * (2*i+1), end="")
    print(" " * (n-i-1))