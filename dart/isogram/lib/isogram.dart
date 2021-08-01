class Isogram {
  bool isIsogram(String str) {
    String temp = str.toLowerCase();
    Set<String> letter_set = new Set<String>();

    for (int i = 0; i < temp.length; i++) {
      if (temp[i] == "-" || temp[i] == " ") continue;

      if (letter_set.contains(temp[i])) return false;
      letter_set.add(temp[i]);
    }
    return true;
  }
}
