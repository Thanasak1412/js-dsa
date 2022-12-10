(() => {
  // Binary Search Tree - Dept First Search

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
      else if (value < root.value) return this.search(root.left, value);
      return this.search(root.right, value);
    }

    /* 
        Pre-oder
            1. Read the data of the node.
            2. Visit the left subtree.
            3. Visit the right subtree.
    */
    preOrder(root) {
      if (!root) return null;
      console.log("root => ", root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }

    /* 
        In-order
            1. Visit the left subtree.
            2. Read the data of the node.
            3. Visit the right subtree.
    */
    inOrder(root) {
      if (!root) return null;

      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }

    /* 
        Post-order
            1. Visit the left subtree.
            2. Visit the right subtree.
            3. Read the data of the node.
    */
    postOrder(root) {
      if (!root) return null;
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  const bst = new BinarySearchTree();

  console.log("isEmpty => ", bst.isEmpty());

  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(3);
  bst.insert(7);

  console.log("search => ", bst.search(bst.root, 10));
  console.log("search => ", bst.search(bst.root, 30));
  console.log("search => ", bst.search(bst.root, 40));
  bst.preOrder(bst.root);
  bst.inOrder(bst.root);
  bst.postOrder(bst.root);
})();
