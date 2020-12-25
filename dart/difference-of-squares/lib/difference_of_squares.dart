import 'dart:math';

class DifferenceOfSquares {
  int squareOfSum(int n) {
    //num sum_of_squares = (n * (n + 1) * ((2 * n) + 1)) / 6;
    num square_of_sum = pow((n * (n + 1)) / 2, 2);
    return square_of_sum.toInt();
  }

  int sumOfSquares(int n) {
    num sum_of_squares = (n * (n + 1) * ((2 * n) + 1)) / 6;
    return sum_of_squares.toInt();
  }

  int differenceOfSquares(int n) {
    return squareOfSum(n) - sumOfSquares(n);
  }
}
