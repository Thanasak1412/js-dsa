(() => {
  // Binary Search Tree - Breadth First Search

  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {
    constructor() {
      this.root = null;
    }

    isEmpty() {
      return this.root === null;
    }

    insert(value) {
      const newNode = new Node(value);

      this.isEmpty()
        ? (this.root = newNode)
        : this.insertNode(this.root, newNode);
    }

    insertNode(root, newNode) {
      newNode.value < root.value
        ? root.left === null
          ? (root.left = newNode)
          : this.insertNode(root.left, newNode)
        : root.right === null
        ? (root.right = newNode)
        : this.insertNode(root.right, newNode);
    }

    search(root, value) {
      if (!root) return false;
      if (root.value === value) return true;

      return value < root.value
        ? this.search(root.left, value)
        : this.search(root.right, value);
    }

    // Use the optimized queue enqueue and dequeue from queue-object.is instead.
    // I've used an array for simplicity.
    levelOrder() {
      const queue = [];

      queue.push(this.root);

      while (queue.length) {
        const curr = queue.shift();

        console.log(curr.value);

        curr.left && queue.push(curr.left);
        curr.right && queue.push(curr.right);
      }
    }

    min(root) {
      if (!root.left) return root.value;

      return this.min(root.left);
    }

    max(root) {
      if (!root.right) return root.value;

      return this.max(root.right);
    }

    delete(value) {
      this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
      if (root === null) return root;
      if (value < root.value) {
        root.left = this.deleteNode(root.left, value);
      } else if (value > root.value) {
        root.right = this.deleteNode(root.right, value);
      } else {
        if (!root.left && !root.right) return null;
        if (!root.left) {
          return root.right;
        } else if (!root.right) {
          return root.left;
        }

        root.value = this.min(root.right);
        root.right = this.deleteNode(root.right, root.value);
      }

      return root;
    }
  }

  const bst = new BinarySearchTree();

  console.log(bst.isEmpty());

  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(3);
  bst.insert(7);
  bst.insert(13);
  bst.insert(17);
  bst.insert(2);
  bst.delete(17);
  bst.levelOrder();
})();
