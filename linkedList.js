(() => {
  // Linked List Class

  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }

    getSize() {
      return this.size;
    }

    isEmpty() {
      return this.size === 0;
    }

    prepend(value) {
      const node = new Node(value);

      if (this.isEmpty()) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        this.head = node;
      }

      this.size++;
    }

    append(value) {
      const node = new Node(value);

      if (this.isEmpty()) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        this.tail = node;
      }

      this.size++;
    }

    removeFromFront() {
      if (this.isEmpty()) return null;

      const removeValue = this.head.value;

      this.head = this.head.next;
      this.size--;

      return removeValue;
    }

    removeFromEnd() {
      if (this.isEmpty()) return null;

      const removeValue = this.tail.value;
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        console.log("this.head => ", this.head);
        let prev = this.head;

        while (prev.next !== this.tail) {
          prev = prev.next;
        }

        prev.next = null;
        this.tail = prev;

        console.log("this.head => ", this.head);
      }

      this.size--;

      return removeValue;
    }

    print() {
      if (this.isEmpty()) return "List is empty.";
      if (this.size === 1) return this.head;
      else {
        let curr = this.head;
        let values = "";

        while (curr) {
          values += `${curr.value} `;
          curr = curr.next;
        }

        return values;
      }
    }
  }

  const list = new LinkedList();

  list.append(10);
  list.append(20);
  list.append(30);

  console.log("removeFromEnd => ", list.removeFromEnd());
  console.log("print => ", list.print());
  console.log("removeFromFront => ", list.removeFromFront());
  console.log("print => ", list.print());
})();
