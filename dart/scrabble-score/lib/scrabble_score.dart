class scrabble {
  static const Map<int, String> mp = {
    1: "AE, I, O, U, L, N, R, S, T",
    2: "D, G",
    3: "B, C, M, P",
    4: "F, H, V, W, Y",
    5: "K",
    8: "J, X",
    10: "Q, Z"
  };
  static int score([String str]) {
    int result = 0;
    String temp = str.toUpperCase();
    for (int i = 0; i < str.length; i++) {
      mp.forEach((key, value) {
        if (value.contains(temp[i])) {
          result += key;
        }
      });
    }
    return result;
  }
}

int score(String str) {
  return scrabble.score(str);
}
