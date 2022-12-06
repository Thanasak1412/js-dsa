(() => {
  // Stack

  class Stack {
    constructor() {
      this.items = [];
    }

    push(element) {
      this.items.push(element);
    }

    pop() {
      return this.items.pop();
    }

    peek() {
      return this.items[this.items.length - 1];
    }

    isEmpty() {
      return this.items.length === 0;
    }

    size() {
      return this.items.length;
    }
  }

  const stack = new Stack();

  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);

  console.log("size => ", stack.size());
  console.log("pop => ", stack.pop());
  console.log("peek => ", stack.peek());
  console.log("size => ", stack.size());
})();
