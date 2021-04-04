//
// This is only a SKELETON file for the 'Binary Search Tree' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// class Node {
//   constructor(value, leftNode = null, rightNode = null) {
//     this.value = value;
//     this.left = leftNode;
//     this.right = rightNode
//   }
// }

export class BinarySearchTree {
  constructor(value) {
    this._data = value;
    this._left = null;
    this._right = null;
  }

  get data() {
    return this._data;
  }
  get right() {
    return this._right;
  }

  get left() {
    return this._left;
  }

  insert(data) {
    if (data <= this._data) {
      if (this._left) {
        this._left.insert(data);
      } else {
        this._left = new BinarySearchTree(data);
      }
    } else {
      if (this._right) {
        this._right.insert(data);
      } else {
        this._right = new BinarySearchTree(data);
      }
    }
  }

  each(cb, node = this) { // Takes a callback argument.
    if (node) {
      this.each(cb, node._left);
      cb(node.data);
      this.each(cb, node._right);
    }
  }
}
