
class Node {
  constructor(value, left =  null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

class Tree {
  constructor() {
    this.root = null
  }
  toObject() {
    return this.root
  }
  add(value, root = this.root) {
    const node = new Node(value)
    if (this.root === null) {
      this.root = node
      return;
    }
    if (node.value > root.value) {
      if (!root.right) {
        root.right = node
      } else this.add(value, root.right)
    }
    if (node.value < root.value) {
      if (!root.left) {
        root.left = node
      } else this.add(value, root.left)
    }
  }

}
