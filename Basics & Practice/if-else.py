# TO FIND THE GREATER NO. AMONG FOUR USER INPUTS-------------------->
a = float(input("enter 1st no."))
b = float(input("enter 2nd no."))
c = float(input("enter 3rd no."))
d = float(input("enter 4th no."))
if a > b and a > c and a > d:
    print(a, "is greater")
elif b < a < d and a > c:
    print(d, "is greater")
elif b < a < c and a > d:
    print(c, "is greater")
else:
    print(b, " is greater")


# CHECK WHETHER STUDENT PASS OR FAIL, FAIL IF SCORES LESS THAN 40% OVERALL and LESS THAN 33% IN EACH SUBJECT-------------------->
a = float(input("subject 1:"))
b = float(input("subject 2:"))
c = float(input("subject 3:"))
d = (a+b+c)*100/300
if (a and b and c) >= 33 and d >= 40:
    print("pass")
else:
    print("fail")

# CHECK USERNAME CONSIST OF MORE THAN 10 CHARACTERS OR FEWER------------------------------->
a = input("enter name:")
if len(a) < 10:
    print("less than 10")
else:
    print("more than 10")
