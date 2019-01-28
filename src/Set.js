class Set {
  constructor() {
    this.items = {};
  }
  
  // add items to the set
  add(element) {
    if (this.has(element)) {
      return false;
    }
    this.items[element] = element;
    return true;
  }
  
  // delete element from the set
  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }
  
  // returns true if the element exists and false if it doesn't
  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }
  
  clear() {
    this.items = {};
  }
  
  size() {
    return Object.keys(this.items).length;
  }
  
  values() {
    return Object.values(this.items);
  }
  
  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach((element) => unionSet.add(element));
    otherSet.values().forEach((element) => unionSet.add(element));
    return unionSet;
  }
}
