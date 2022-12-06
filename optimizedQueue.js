(() => {
  // Queue implementation optimized With Object

  class Queue {
    constructor() {
      this.items = {};
      this.rear = 0;
      this.front = 0;
    }

    enqueue(element) {
      this.items[this.rear] = element;
      this.rear++;
    }

    dequeue() {
      const item = this.items[this.front];

      delete this.items[this.front];
      this.front++;

      return item;
    }

    peek() {
      return this.items[this.front];
    }

    isEmpty() {
      return this.rear - this.front === 0;
    }

    size() {
      return this.rear - this.front;
    }

    print() {
      console.log("print => ", this.items);
    }
  }

  const queue = new Queue();

  console.log("isEmpty => ", queue.isEmpty());

  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(100);
  queue.print();

  console.log("dequeue => ", queue.dequeue());
  console.log("peek => ", queue.peek());
  console.log("size => ", queue.size());
})();
