const Stack = require('./Stack');

class SetOfStack {
  constructor(threshold) {
    this.threshold = threshold;
    this.count = 0;
    this.masterStack = new Stack();
    this.currStack = new Stack();
  }

  push(val) {
    // push val onto currStack
    this.currStack.push(val);
    // count++
    this.count++;
    // if currStack.size === threshold
    if (this.currStack.count === this.threshold) {
      // 		push currStack onto masterStack
      this.masterStack.push(this.currStack);
      //		reset currStack to a new Stack
      this.currStack = new Stack();
      //    reset count to 0
      this.count = 0;
    }
  }

  pop() {
    // pop from currStack
    const popedVal = this.currStack.pop();
    // decrement count
    this.count--;
    // if count < 1
    if (this.count < 1) {
      // pop off master stack and set to currStack
      this.currStack = this.masterStack.pop();
      // reset count to threshold
      this.count = this.threshold;
    }
    // return poped value
    return popedVal;
  }
}

const setOfStack = new SetOfStack(10);
setOfStack.push(1);
setOfStack.push(2);
setOfStack.push(3);
setOfStack.push(4);
setOfStack.push(5);
setOfStack.push(6);
setOfStack.push(7);
setOfStack.push(8);
setOfStack.push(9);
setOfStack.push(10);
setOfStack.push(11);
console.log(setOfStack.pop())
console.log(setOfStack.pop())
console.log(setOfStack.pop())
console.log(setOfStack);
