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
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
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
    this.tail.next = null;
    lastNode.next = null;
    lastNode.prev = null;
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
    const newNode = new Node(value);
    if (this.count() !== 0) {
      newNode.next = this.head;
      newNode.prev = this.head.prev;
      this.head.prev = newNode;
      this.tail.prev = this.tail;
    } else {
      this.tail = newNode;
    }
    this.head = newNode;
    this.length++;
  }

  printList() {
    let itNode = this.head;
    const list = [];
    while(itNode) {
      list.push(itNode.value);
      itNode = itNode.next;
    }
  }

  // delete the occurance of first element given it's value
  delete(value) {
    let itNode = this.head;
    while(itNode !== null) {
      if (itNode.value === value) {
        if (this.count() === 1) {
          delete this.head;
          this.head = null;
          this.tail = null;
        } else {
          if (itNode.next) {
            itNode.next.prev = itNode.prev;
          } else {
            this.tail = itNode.prev;
          }
          if (itNode.prev) {
            itNode.prev.next = itNode.next;
          } else {
            this.head = itNode.next;
          }
        }
        this.length--;
        return;
      }
      itNode = itNode.next;
    }
  }

  // gets the length of the list
  count() {
    return this.length;
  }
}
