# TO OVERWRITE WRITTEN TEXT AND READ TEXT FILE(overwrite w and we can also use append a(by which our old values remain as they were))------------->
n = input("enter you want to overwrite:")
f = open("test.txt", "w")
f.write(n)
f.close()
f = open("test.txt", "r")
text = f.read()
print(text)
f.close()

# TO OVERWRITE TEXT BUT WITH(there is no need to use f.close() function) COMMAND--------------------------------------->
with open("test.txt", "w") as f:
    f.write("nice to meet you")

# TO CHECK WHETHER THE WORD EXIST IS FILE OR NOT----------------------------------------------------------------------->
with open("test.txt") as f:
    a = f.read()

z = str(input("enter word to be find:"))
a.find(z)
if a.find(z) >= 0:
    print("word found.\nLocation:", a.find(z))
else:
    print("no such word exist")
# ---------OR------------ #
f = open('test.txt')
t = f.read()
z = input("enter word to be found:")
if z in t:
    print("present")
else:
    print("not present")
f.close()
