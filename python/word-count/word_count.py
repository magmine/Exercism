import re

def count_words(sentence : str):
    sentence = sentence.lower()
    chunks = re.split("[^a-zA-Z0-9'-']",sentence)
    st = set(chunks)
    mp = {}
    for word in st:
        mp[word] = chunks.count(word)
    return mp