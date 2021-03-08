def two_fer(name = ""):
    # Ternary operator in python : [on_true] if [expression] else [on_false] 
    name = name if name else "you"
    return "One for " + name + ", one for me."
