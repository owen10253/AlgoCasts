// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(init, next = null) {
    this.data = init;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    var count = 0;
    var cur = this.head
    while (cur) {
      count++;
      cur = cur.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    var cur = this.head;
    while (cur.next) {
      cur = cur.next;
    }
    return cur;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head ? this.head.next : null;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    var prev = this.head;
    var curr = this.head.next;
    while (curr.next) {
      prev = curr;
      curr = curr.next
    }
    prev.next = null;
  }

  insertLast(data) {
    var last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    var count = 0;
    var curr = this.head;

    while (curr) {
      if (count === index) {
        return curr;
      }
      count++;
      curr = curr.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index > 0) {
      var atNode = this.getAt(index - 1);
      if (atNode.next) {
        atNode.next = atNode.next.next;
        return;
      }
      return;
    } else {
      this.removeFirst();
    }
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.insertFirst(data)
    } else if (index < this.size()) {
      var prev = this.getAt(index - 1);
      var atNode = this.getAt(index);
      prev.next = new Node(data, atNode)
    } else {
      this.insertLast(data)
    }
    return;
  }

  forEach(f) {
    if (!this.head) {
      return;
    }
    var curr = this.head;
    while (curr) {
      f(curr);
      curr = curr.next;
    }
    return;
  }

}

module.exports = { Node, LinkedList };
