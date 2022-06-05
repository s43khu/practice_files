# TO OPEN REPLACE A CERTAIN WORD IN THE TEXT FILE------------------------------------>

# FIRST WE OPEN THE TXT FILE  AND STORE THE DATA AS STRING IN A VARIABLE
with open("test.txt") as f:
    w = str(f.read())

# NOW TAKE THE INPUT FROM USER WHAT HE WANTS TO REPLACE AND BY WHICH
b = str(input("enter word to be replaced:"))
a = str(input("enter word that is going to replace:"))

# THEN AT LAST WRITE THE  FILE AS IT WAS STORED IN THE VARIABLE(in my case it was w) BY SIMPLY
# REPLACE FUNCTION AND USER INPUTS
with open("test.txt", "w") as f:
    f.write(w.replace(b, a))
# BELOW GIVEN PROGRAM WILL PREVIEW YOUR TEXT FILE(not imp. to include in program)
with open("test.txt") as f:
    print(f.read())
