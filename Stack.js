class Stack {
  constructor() {
    this.count = 0;
    this.data = {};
    this.min = null;
  }

  push(data) {
    this.count += 1;
    this.min = !this.min || data < this.min ? data : this.min;
    this.data[this.count] = data;
  }

  pop() {
    const deleted = this.data[this.count];
    delete this.data[this.count];
    this.count -= 1;
    return deleted;
  }

  peek() {
    return this.data[this.count];
  }

  size() {
    return this.count;
  }
  
  isEmpty() {
    return this.count == 0;
  }

  toString() {
    if (this.count < 1) {
      return '';
    }
    let start = 1;
    let string = `${this.data[start]}`;
    while (start < this.count) {
      start++;
      string = `${string} ${this.data[start]}`;
    }
    return string;
  }

  minimum() {
    return this.min;
  }
}

// write a function that takes a decimal and returns a binary
const decimalToBinary = (decimal) => {
  const binaryStack = new Stack();
  let dec = decimal;
  while (dec > 0) {
    binaryStack.push(dec % 2);
    dec = Math.floor(dec / 2);
  }
    
  let string = binaryStack.pop();
  while(binaryStack.size() > 0) {
    string = `${string}${binaryStack.pop()}`
  }
  return string;
}

module.exports = Stack;
