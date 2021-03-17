import re

def is_isogram(string : str):
    s = [ch for ch in string.lower() if ch.isalpha()]
    return len(set(s)) == len(s)
