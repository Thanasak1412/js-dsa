(() => {
  // Queue

  class Queue {
    constructor() {
      this.items = [];
    }

    enqueue(element) {
      this.items.push(element);
    }

    dequeue() {
      return this.items.shift();
    }

    isEmpty() {
      return this.items.length === 0;
    }

    peek() {
      if (!this.isEmpty()) return this.items[0];
      return null;
    }

    size() {
      return this.items.length;
    }
  }

  const queue = new Queue();

  console.log("size => ", queue.size());

  queue.enqueue(10);
  queue.enqueue(100);
  queue.enqueue(20);

  console.log("peek => ", queue.peek());
})();
