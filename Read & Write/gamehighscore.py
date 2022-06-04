# GAME STORING HIGH SCORES IN TEXT FILE

# BELOW GIVEN IS GAME FUNCTION WHICH RETURNS THE VALUE a(score in game) WE HAVE TO REMOVE a AS IS IT USED FOR TEST
# PURPOSE
def game(a):
    return a


# BELOW LINES ARE WRITTEN TO CHECK THE CODE
z = int(input("test score:"))
game(z)

# BELOW COMMAND IS  USED TO PICK UP THE SCORE FROM THE GAME AND STORE IT IN score(OR ANY VARIABLE)
score = game(z)

# NOW READ THE TEXT FILE TO CHECK STORED VALUE AND STORE IT IN VARIABLE(in my case high)
with open("hiscore.txt") as f:
    high = f.read()

# OVERWRITE THE SCORE IN TEXT FILE IF IT IS EMPTY OR PREVIOUS SCORE IS LESS OTHERWISE DO NOTHING
if high == "":
    with open("hiscore.txt", "w") as f:
        f.write(str(score))
elif high < str(score):
    with open("hiscore.txt", "w") as f:
        f.write(str(score))

# TO CHECK WHETHER SCORE IS UPDATED IF HIGHER THAN BEFORE
with open("hiscore.txt") as f:
    print(f.read())


# ----------------------------------------FUNCTIONAL CODE------------------------------------------------------------- #
def game():
    return 145


# BELOW COMMAND IS  USED TO PICK UP THE SCORE FROM THE GAME AND STORE IT IN score(OR ANY VARIABLE)
score = game()

# NOW READ THE TEXT FILE TO CHECK STORED VALUE AND STORE IT IN VARIABLE(in my case high)
with open("hiscore.txt") as f:
    high = f.read()

# OVERWRITE THE SCORE IN TEXT FILE IF IT IS EMPTY OR PREVIOUS SCORE IS LESS OTHERWISE DO NOTHING
if high == "":
    with open("hiscore.txt", "w") as f:
        f.write(str(score))
    with open("hiscore.txt") as f:
        print("NEW HIGH SCORE:", f.read())
elif high < str(score):
    with open("hiscore.txt", "w") as f:
        f.write(str(score))
    with open("hiscore.txt") as f:
        print("NEW HIGH SCORE:", f.read())
else:
    with open("hiscore.txt") as f:
        print("FAIL TO BEAT HIGH SCORE:", f.read())
    print("YOUR SCORE:", str(score))
