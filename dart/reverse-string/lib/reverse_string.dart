String reverse(String str) {
  int j = str.length - 1;
  String temp = "";
  while (j > -1) {
    temp += str[j];
  }
  return temp;
}
