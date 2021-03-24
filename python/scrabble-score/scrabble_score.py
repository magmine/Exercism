scrabble_score = {
    'A, E, I, O, U, L, N, R, S, T': 1,
    'D, G': 2,
    'B, C, M, P': 3,
    'F, H, V, W, Y': 4,
    'K': 5,
    'J, X': 8,
    'Q, Z': 10
}


def score(word: str) -> int:
    total_score: int = 0
    word = word.upper()
    for char in word:
        total_score = total_score + get_char_score(char)
    return total_score

def get_char_score(char: str) -> int:
    for key, value in scrabble_score.items():
        if char in key:
            return value
    return 0