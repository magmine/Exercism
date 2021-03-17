import re

def is_isogram(string : str):
    string = re.sub("[^A-Za-z]", "", string).lower()
    for i in range(len(string)):
        if string.count(string[i]) > 1:
            return False
    return True
