class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  insert(key) {
    if(!this.root) {
      this.root = new Node(key)
    } else {
      this.insertNode(key);
    }
  }
  
  insertNode(key, node = this.root) {
    // this compare assumes the key is a number
    // if the key was a different type, you would need to write
    // a custom compare function.
    if (key < node.key) {
      if (!node.left) {
        node.left = new Node(key);
      } else {
        this.insertNode(key, node.left);
      }      
    } else {
      if (!node.right) {
        node.right = new Node(key);
      } else {
        this.insertNode(key, node.right);
      }
    }
  }
  
  inOrderTraversal(cb, node) {
    if (node) {
      this.inOrderTraversal(cb, node.left);
      cb(node.key);
      this.inOrderTraversal(cb, node.right);
    }
  }
  
  preOrderTraversal(cb, node) {
    if (node) {
      cb(node.key);
      this.preOrderTraversal(cb, node.left);
      this.preOrderTraversal(cb, node.right);
    }
  }
  
  postOrderTraversal(cb, node) {
    if (node) {
      this.postOrderTraversal(cb, node.left);
      this.postOrderTraversal(cb, node.right);      
      cb(node.key);
    }
  }
  
  min() {
    if(!this.root) {
      return false;  
    }
    return this.minNode(this.root).key;
  }
  
  minNode(node) {
    if (!node.left) {
      return node;
    }
    return this.minNode(node.left);    
  }
  
  max(node = this.root) {
    if (!node.right) {
      return node.key;
    }
    return this.max(node.right);
  }
  
  search(key, node = this.root) {
    if (!node) { return false; }
    if (key === node.key) { return true; }
    if (key < node.key) { return this.search(key, node.left); }
    return this.search(key, node.right);
  }
  
  remove(key, node = this.root) {
    if (!node) { return false; }
    if (key < node.key) {
      node.left = this.remove(key, node.left);
      return node;
    }
    if (key > node.key) {
      node.right = this.remove(key, node.right);
      return node;
    }

    if (!node.left && !node.right) {
      return null;
    }
    if (!node.left || !node.right) {
      return node.left || node.right;
    }
    
    const replacementNode = this.minNode(node.right);
    this.remove(replacementNode.key);
    replacementNode.left = node.left;
    replacementNode.right = node.right;
    return replacementNode;
  }
}
