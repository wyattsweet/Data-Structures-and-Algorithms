class ValuePair {
  constructor(k, v) {
    this.key = k;
    this.value = v;
  }
  
  toString() {
    return `${this.key}: ${this.value}`;
  }
}

class Dictionary {
  constructor() {
    this.table = {};
  }
  
  // adds a new key, value pair to the dictionary
  set(key, value) {
    // return false if key or value is null or undefined
    if (!key && !value) {
      return false;
    }
    // else add to table    
    this.table[String(key)] = new ValuePair(key, value);
    // return true
    return true;
  }
  
  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[String(key)];
      return true;
    }
    return undefined;
  }
  
  get(key) {
    if (this.hasKey(key)) {
      return this.table[String(key)].value
    }
    return false;
  }
  
  clear() {
    this.table = {};
  }
  
  size() {
    return Object.keys(this.table).length;
  }
  
  keys() {
    return this.keyValues().map(keyValue => keyValue.key);
  }
  
  values() {
    return this.keyValues().map(keyValue => keyValue.values);
  }  
  
  isEmpty() {
    return this.size() == 0;
  }

  hasKey(k) {
    return !!this.table[String(k)];
  }
  
  keyValues() {
    return Object.values(this.table);
  }
  
  forEach(cb) {
    const valuePairs = this.keyValues();
    for(let i = 0; i < valuePairs.length; i++) {
      const res = cb(valuePairs[i].key, valuePairs[i].value);
      if (!res) { break; }
    }
  }
}

module.exports = Dictionary;
