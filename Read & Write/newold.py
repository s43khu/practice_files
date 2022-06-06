# PROGRAM TO COPY THE OLD FILE CONTENT TO NEW AND DELETE THE OLD FILE

import os

# USER INPUT FOR OLD FILE AND NEW FILE
old = str(input("enter old file name:"))
new = str(input("enter new file name:"))

# COPYING THE OLD FILE CONTENT AND PASTE IT TO THE NEW CREATED FILE
with open(old) as f:
    w = f.read()
with open(new, "w") as f:
    f.write(w)

# REMOVES THE OLD EXISTING FILE
os.remove(old)
