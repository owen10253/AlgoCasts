// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    for (var i = 0; i < this.children.length; i++) {
      this.children.splice(i, 1);
    }
  }
}

class Tree {
  constructor(node = null) {
    this.root = node;
  }

  traverseBF(f) {
    var queue = [this.root];
    while (queue.length) {
      var node = queue.shift();

      queue.push(...node.children);
      f(node);
    }
  }
  traverseDF(f) {
    var stack = [this.root];
    while (stack.length) {
      var node = stack.shift();

      stack.unshift(...node.children);
      f(node);
    }
  }
}

module.exports = { Tree, Node };
