# CREATING A DICTIONARY
a = {"name": ["abhishek", "rohan", "mahesh"], "class": "10th", "roll no.": "1233"}
print(a)

# UPDATING A DICTIONARY
a.update({"class": "9th"})
print(a)

# PRINTING KEYS IN DICTIONARY
print(a.keys())

# PRINTING ALL ITEMS IN DICTIONARY
print(a.items())

# HINDI DICTIONARY-------------------------------------------------------------------------------------------------->
a = {"seb": "apple", "angur": "grape", "amrud": "guava", "tarbuj": "watermelon", "anar": "pomegranate"}
i = input("translate=")
print(a[i])

# INPUT NAME AND YOUR FAV LANG------------------------------------------------------------------------------------->
x = {}
a = input("name:")
z = input("fav lang:")
b = input("name:")
y = input("fav lang:")
c = input("name:")
w = input("fav lang:")
x[a] = z
x[b] = y
x[c] = w
print(x)
