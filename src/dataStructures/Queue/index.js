// a queue which stores the queued elements in an object

class Queue {
  constructor() {
    this.data = {};
    this.count = 0;
    this.front = 0;
  }
  
  // adds an element to the queue
  enqueue(element) {
    this.data[this.count] = element;
    this.count++;    
    return element;
  }
  
  // returns the element from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.data[this.front];
    delete this.data[this.front];
    this.front++;
    return result;
  }
  
  // return the element front of the queue but doesn't dequeue it
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.data[this.front];
  }
  
  // returns true if the queue is empty, false if it's not
  isEmpty() {
    return this.count - this.front == 0;
  }
  
  // returns the number of elements in the queue
  size() {
    return this.count - this.front;
  }
  
  // clear the queue
  clear() {
    this.data = {};
    this.count = 0;
    this.front = 0;
  }
  
  // return the elements in the queue as a comma seperated string
  toString() {
    const { count, data, front } = this;
    let string = `${data[front]}`;
    for(let i = front + 1; i < front + count; i++) {
      string = `${string}, ${data[i]}`
    }
    return string;
  }
}

module.exports = Queue;
