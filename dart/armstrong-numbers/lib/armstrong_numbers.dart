import 'dart:math';

class ArmstrongNumbers {
  bool isArmstrongNumber(num n) {
    num result = 0;
    String number = n.toString();
    for (int i = number.length - 1; i >= 0; i--) {
      result += pow(int.parse(number[i - (number.length - 1)]), i + 1);
    }
    if (result == n) return true;
    return false;
  }
}
