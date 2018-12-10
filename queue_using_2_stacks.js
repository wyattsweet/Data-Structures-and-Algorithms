const Stack = require('./Stack.js');

// implement a queue using two stacks
class MyQueue {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
    this.onStackB = false;
  }

  _swap() {
    if (this.onStackB) {
      // move stackB to stackA
      while(!this.stackB.isEmpty()) {
        this.stackA.push(this.stackB.pop());    
      }
      // set onStackB to false
      this.onStackB = false;
    } else {
      // move stackA to stackB
      while(!this.stackA.isEmpty()) {
        this.stackB.push(this.stackA.pop());
      }
      // set onStackB to true
      this.onStackB = true;
    }
  }
  
  enqueue(element) {
    // we only enqueue to stackA
    if (this.onStackB) { this._swap() }
    this.stackA.push(element);
    return element;
  }

  dequeue() {
    // we only dequeue from stackB
    if (!this.onStackB) { this._swap() }
    return this.stackB.pop();
  }  
}

const queue = new MyQueue();
queue.enqueue('foo');
queue.enqueue('bar');
queue.enqueue('baz');
queue.dequeue();
console.log(queue);
