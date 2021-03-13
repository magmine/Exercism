def is_divisible(number, devisor):
    return number % devisor == 0

def convert(number):
    if number < 0:
        raise Exception("Number is negative can result in ambigüous results")
    result_string = ""
    if is_divisible(number, 3):
        result_string = result_string + "Pling"
    if is_divisible(number, 5):
        result_string = result_string + "Plang"
    if is_divisible(number, 7):
        result_string = result_string + "Plong"
    return result_string if result_string else str(number)
