class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
  }

  insert(value) {
    const newNode = new Node(value);
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    node.next = newNode;
    return newNode;
  }

  search(value, node = this.head) {
    if (value === node.value) {
      return node;
    }

    if (node.next === null) {
      return false;
    }

    return this.search(value, node.next);
  }

  remove(value) {
    console.log(`---- Removing ${value} ----`)
    let node = this.head;
    let deleted = false;

    if (node.value === value) {
      deleted = node;
      this.head = node.next;
      return deleted;
    }

    while (node.next) {
      if (value === node.next.value) {
        deleted = node.next;
        node.next = node.next.next;
        return deleted;
      }
      node = node.next;
    }
    return deleted;
  }

  values() {
    let node = this.head;
    let values = [];

    while (node.next) {
      values.push(node.value);
      node = node.next;
    }
    values.push(node.value);
    return values;
  }

  // remove dups from the list
  unique() {
    // 1 -> 2 -> 2 -> 3 -> 4 -> 4
    let node = this.head;
    let valueSet = new Set([node.value]);

    do {
      node = node.next;
      // if node.value is in valueSet
      if (valueSet.has(node.value)) {
        // remove(node.value)
        this.remove(node.value);
      } else {
        // add to valueSet
        valueSet.add(node.value);
      }
    } while (node.next);
  }

  // return kth to last element
  returnKthToLast(k) {
    // 1 -> 2 -> 3 -> 4
    // find and save length of list
    let node = this.head;
    let length = 1;
    while (node.next) {
      length += 1;
      node = node.next;
    }
    // figure out which value to return
    const kVal = length - (k - 1);
    // traverse list again to that value
    const travCount = 1;
    let node = this.head;
    while (node.next) {
      if (kVal === travCount) {
        return node.value;
      }
      node = node.next;
      travCount += 1;
    }

    return kVal === travCount ? node.value : false;
  }

  // Given a linkedList of numbers
  partition(transitionPoint) {
    // 31 -> 12 -> 20 -> 14 -> 44, 20
    let node = this.head;
    let lowerLinkedList = null;
    let last = node;

    while (node) {
      if (node.value < transitionPoint) {
        if (!lowerLinkedList) {
          lowerLinkedList = new LinkedList(node.value);
        } else {
          last = lowerLinkedList.insert(node.value);
        }
        this.remove(node.value);
      }
      node = node.next;
    }
    last.next = this.head;
    this.head = lowerLinkedList.head;
  }
}
