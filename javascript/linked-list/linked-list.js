//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Node {
  constructor(value, nextNode = null, prevNode = null) {
    this.value = value;
    this.next = nextNode;
    this.prev = prevNode
  }
}


export class LinkedList {

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // Adds an element to the end of a list
  push(value) {
    const newNode = new Node(value);

    if (this.count() === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let itNode = this.head;
      while(itNode.next) {
        itNode = itNode.next;
      }
      itNode.next = newNode;
      newNode.prev = itNode;
      newNode.next = this.head;
      this.tail = newNode;
      this.head.prev = newNode;
    }
    this.length++;
  }

  // pop gets last element from the list and removes it'
  pop() {
    let result;
    if (this.count() === 0) throw new Error("Trying to pop an empty list");
    result = this.tail.value;
    if (this.count() === 1) {
      delete this.tail;
      this.tail = null;
      this.head = null;
      this.length--;
      return result;
    }
    let lastNode = this.tail;
    this.tail = lastNode.prev;
    this.tail.next = lastNode.next;
    this.length--;
    return result;
    // delete lastNode;
  }

  // shift gets first element from the list, and removes it after that
  shift() {
    let result;
    if (this.count() === 0) throw new Error("Trying to shift an empty list");
    result = this.head.value;
    if (this.count() === 1) {
      delete this.tail;
      this.tail = null;
      this.head = null;
      this.length--;
      return result;
    }
    let firstNode = this.head;
    this.head = firstNode.next;
    this.head.prev = firstNode.prev;
    this.length--;
    return result;
  }

  // unshift adds element at the start of the list
  unshift(value) {
    throw new Error('Remove this statement and implement this function');
  }
  // delete an element given it's value
  delete(value) {
    throw new Error('Remove this statement and implement this function');
  }

  // gets the length of the list
  count() {
    return this.length;
  }
}
