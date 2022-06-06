# PROGRAM TO CENSOR THE WORDS IN A TEXT FILE-------------------------------------------------->

# LIST OF WORDS TO BE CENSORED IN TEXT FILE
l = ["fuck", "sucks", "bomb", "dumb", "ass", "butt", "fake", "bitch"]

# OPEN THE FILE AND STORE THE TEXT IN A VARIABLE
with open("test.txt") as f:
    w = str(f.read())

# RUN THE LOOP FOR LIST OF CENSOR WORDS AND REPLACE THEM AND STORE IT IN SAME VARIABLE
for i in l:
    w = w.replace(i, "***")

# OVERWRITE THE FILE WITH THAT VARIABLE IN WHICH REPLACE TEXT FILE IS STORED
with open("test.txt", "w") as f:
    f.write(w)

# TO CHECK THE PREVIEW OF THE FILE
with open("test.txt") as f:
    print(f.read())

