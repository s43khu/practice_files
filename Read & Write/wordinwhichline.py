# TO FIND WORD IN WHICH LINE IT EXIST---------------------------------------------------------------->

# TAKE USER INPUT FOR THE WORD
z = input("enter word to be found:")

# WRITE A VALUE TO VARIABLE TRUE JUST TO RUN WHILE LOOP
c = True

# DEFINE A VARIABLE(i) WITH 1 TO COUNT NO. OF LINES
i = 1

# OPEN FILE AND RUN LOOP WITH CONDITION TO EVERY READ LINE VARIABLE(i) IS GOING TO INCREMENT
with open("test.txt") as f:
    while c:
        c = f.readline()
        if z in c:
            print(c)
            # JUST READ VARIABLE(i) HOW  MANY TIMES LOOP GOT INCREMENTED
            print(f"Yes {z} is present on line number {i}.")
        i += 1
