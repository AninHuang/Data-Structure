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

let lineForPizza = new QueueFromArray();

lineForPizza.enqueue('Eric');
lineForPizza.enqueue('Anin');
lineForPizza.enqueue('Audrey');

console.log(lineForPizza.dequeue());
console.log(lineForPizza.dequeue());
console.log(lineForPizza.dequeue());
