# GREETING A PERSON WITH A CALL FUNCTION------------------------------------------------------>
def mn():
    print("hello,")


g = input("enter your name")
mn()
print("\t", g)


# GREETING DIFFERENT METHOD------------------------------------------------------------------>
def greet():
    gr = "GOOD MORNING, " + name
    return gr


name = input("name:")
print(greet())


# PERCENTAGE BY CALL FUNCTION------------------------------------------------------->
def percent(marks):
    p = (marks[0] + marks[1] + marks[2] + marks[3]) * 100 / 400
    return p


m1 = [45, 56, 78, 48]
print(percent(m1))

m2 = [78, 88, 67, 91]
print(percent(m2))


# TO FIND FACTORIAL OF A NO. BY CALL FUNCTION----------------------------------------->
def factorial(r):
    k = 1
    for i in range(1, r + 1):
        k = k * i
    return k


x = int(input("enter no."))
print(factorial(x))


# SOLVING FACTORIAL USING RECURSION ( RECURSIONS are basically used in ALGORITHMS)----->
def factorial_rec(d):
    if d == 0 or d == 1:
        return 1
    return d * factorial_rec(d - 1)


x = int(input("enter no."))
print(factorial_rec(x))


# TO FIND THE GREATEST OF THREE NO.s ---------------------------------------------->
def greater(num):
    if num[0] > num[1] and num[0] > num[2]:
        print(num[0], " is greater")
    elif num[0] < num[1] > num[2]:
        print(num[1], " is greater")
    else:
        print(num[2], " is greater")
    return print()


dig = [1, 2, 3]
dig[0] = int(input("enter 1st no.:"))
dig[1] = int(input("enter 2nd no.:"))
dig[2] = int(input("enter 3rd no.:"))

greater(dig)


# TO CONVERT CELSIUS TO FAHRENHEIT--------------------------------------------------->
def fh(cel):
    p = (cel * 9 / 5) + 32
    return p


n = float(input("enter celsius:"))
celsius = fh(n)
print("fahrenheit value:", celsius)

# TO PREVENT PRINT TO WRITE NEXT SENTENCE OR WORD IN NEW LINE----------------------->
print("Hello", end=" ")
print("guys", end="")
print("!")


# TO FIND THE SUM OF N NATURAL NO.s THROUGH RECURSION METHOD----------------------->
def sm_rec(h):
    if (h - 1) == 0:
        return 1
    return sm_rec(h - 1) + h


v = int(input("enter a no.:"))
print(sm_rec(v))

# TO REMOVE AND ADD NEW THINGS TO LIST VIA FUNCTION-------------------------------->
a = ["car", "bus", "scooter", "bike", "aeroplane", "helicopter", "boat", "ship", "truck", "yacht", "jet"]


def rem_add(ex, exo):
    a.remove(ex)
    a.append(exo)


rm = input("remove:")
ad = input("add:")
rem_add(rm, ad)
a.sort()
print(a)


# TO PRINT TABLE OF A GIVEN NO. VIA CALL FUNCTION------------------------------------>
def multi(val):
    for ri in range(1, 10):
        print(val * ri)
    return val * 10


ms = float(input("enter no.:"))
print(multi(ms))
