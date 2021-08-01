class WordCount {
  Map<String, int> countWords(String phrase) {
    Map<String, int> mp = new Map<String, int>();
    String temp = phrase.toLowerCase();
    List<String> words = temp.split("\s|\t|\n");
    print(words);
    return mp;
  }
}
