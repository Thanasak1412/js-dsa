(() => {
  // Circular queue implementation

  class CircularQueue {
    constructor(capacity) {
      this.items = new Array(capacity);
      this.rear = -1;
      this.front = -1;
      this.currentLength = 0;
      this.capacity = capacity;
    }

    isFull() {
      return this.currentLength === this.capacity;
    }

    isEmpty() {
      return this.currentLength === 0;
    }

    size() {
      return this.currentLength;
    }

    enqueue(element) {
      if (this.isFull()) return null;

      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength += 1;

      if (this.front == -1) this.front = this.rear;
    }

    dequeue() {
      if (this.isEmpty()) return null;

      const item = this.items[this.front];
      this.items[this.front] = null;
      this.front = (this.front + 1) % this.capacity;

      if (this.isEmpty()) {
        this.front = -1;
        this.rear = -1;
      }

      return item;
    }

    peek() {
      if (!this.isEmpty()) return this.items[this.front];

      return null;
    }

    print() {
      if (this.isEmpty()) console.log("Queue is empty.");
      else {
        let i = this.front;
        let str = "";

        for (i; i !== this.rear; i = (i + 1) % this.capacity) {
          str += this.items[i] + " ";
        }

        str += this.items[i];
        console.log(str);
      }
    }
  }

  const circularQueue = new CircularQueue();

  console.log("isEmpty => ", circularQueue.isEmpty());

  circularQueue.enqueue(10);
  circularQueue.enqueue(11);
  circularQueue.enqueue(12);

  circularQueue.print();
  console.log("peek => ", circularQueue.peek());

  console.log("dequeue => ", circularQueue.dequeue());
})();
