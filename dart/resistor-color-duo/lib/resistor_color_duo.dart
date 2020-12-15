import 'dart:math';

class ResistorColorDuo {
  List<String> colors = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white'
  ];
  int value(List<String> color) {
    String _result = "";
    for (int i = 0; i < min(2, color.length); i++) {
      _result += colors.indexWhere((element) => element == color[i]).toString();
    }
    return int.parse(_result);
  }
}
