// let first = { val: 'Anin' }
// first.next = { val: 'is' }
// first.next.next = { val: 'me' }
// console.log(first);

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);
    
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  shift() {
    if (!this.head) {
      return;
    }

    const oldHead = this.head;
    this.head = oldHead.next;

    return oldHead;
  }
}

let list = new LinkedList();
list.push('Anin');
list.push('is');
list.push('me');
list.shift();
console.log(list.head);

