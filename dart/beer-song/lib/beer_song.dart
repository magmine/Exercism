class BeerSong {
  static Map<int, List<String>> mp = const {
    0: [
      "No more bottles of beer on the wall,",
      "no more bottles of beer.",
      "Go to the store and buy some more,",
      "bottles of beer on the wall."
    ],
    1: [
      "bottle of beer on the wall,",
      "bottle of beer.",
      "Take it down and pass it around,",
      "no more bottles of beer on the wall."
    ],
    2: [
      "bottles of beer on the wall,",
      "bottles of beer.",
      "Take one down and pass it around,",
      "bottle of beer on the wall."
    ],
    3: [
      "bottles of beer on the wall,",
      "bottles of beer.",
      "Take one down and pass it around,",
      "bottles of beer on the wall."
    ]
  };
  List<String> recite(int start, int end) {
    List<String> result = [];
    for (int i = 0; i < end; i++) {
      if (start > 2) {
        result.add(start.toString() +
            " " +
            mp[3][0] +
            " " +
            start.toString() +
            " " +
            mp[3][1]);
        result.add(mp[3][2] + " " + (start - 1).toString() + " " + mp[3][3]);
      } else if (start == 2) {
        result.add(start.toString() +
            " " +
            mp[start][0] +
            " " +
            start.toString() +
            " " +
            mp[start][1]);
        result.add(
            mp[start][2] + " " + (start - 1).toString() + " " + mp[start][3]);
      } else if (start == 1) {
        result.add(start.toString() +
            " " +
            mp[start][0] +
            " " +
            start.toString() +
            " " +
            mp[start][1]);
        result.add(mp[start][2] + " " + mp[start][3]);
      } else if (start == 0) {
        result.add(mp[start][0] + " " + mp[start][1]);
        result.add(mp[start][2] + " " + "99 " + mp[start][3]);
      }
      start = start < 0 ? 99 : start - 1;
      if (i < end - 1) result.add("");
    }
    return result;
  }
}
