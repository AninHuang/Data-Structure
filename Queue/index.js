// FIFO: First In First Out
class QueueFromArray {
  constructor() {
    this.value = [];
  }

  // O(n) Linear time -> Not so optimal
  enqueue(val) {
    this.value.unshift(val);
  }

  // O(1) Constant time
  dequeue(){
    return this.value.pop();
  }
}

// let lineForPizza = new QueueFromArray();

// lineForPizza.enqueue('Eric');
// lineForPizza.enqueue('Anin');
// lineForPizza.enqueue('Audrey');

// console.log(lineForPizza.dequeue());
// console.log(lineForPizza.dequeue());
// console.log(lineForPizza.dequeue());

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class QueueFromLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // O(1) Constant time
  enqueue(val) {
    const newNode = new Node(val);

    if (this.tail) {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    
    if (!this.head) {
      this.head = newNode;
    }
  }

  // O(1) Constant time
  dequeue(){
    if (!this.head) {
      return;
    }

    const val = this.head.val;
    this.head = this.head.next;

    return val;
  }
}

// let lineForPizza = new QueueFromLinkedList();

// lineForPizza.enqueue('Eric');
// lineForPizza.enqueue('Anin');
// lineForPizza.enqueue('Audrey');

// console.log(lineForPizza.dequeue());
// console.log(lineForPizza.dequeue());
// console.log(lineForPizza.dequeue());