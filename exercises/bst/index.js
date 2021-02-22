// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    var insertHelper = (data, node) => {
      if (node === null) {
        return;
      }

      if (data > this.data) {
        if (node.right === null) {
          node.right = new Node(data)
          return;
        }
        insertHelper(data, node.right);
      } else if (data < this.data) {
        if (node.left === null) {
          node.left = new Node(data)
          return;
        }
        insertHelper(data, node.left)
      }
    }

    insertHelper(data, this)
  }

  contains(input) {
    if (this.data === input) {
      return this;
    }

    if (input > this.data && this.right) {
      return this.right.contains(input);
    } else if (input < this.data && this.left) {
      return this.left.contains(input);
    }

    return null;
  }
}

module.exports = Node;
