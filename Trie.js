class Trie {
  constructor() {
    this.root = {};
  }
  
  addWord(word) {
    let node = this.root;
    for(let i = 0; i < word.length; i++) {
      const char = word.charAt(i);

      if (!node[char]) {
        node[char] = {};
      }
      node = node[char];
    }
    node['*'] = true;
  }
  
  startsWith(prefix) {
    let node = this.root;
    const words = [];
    for(let i = 0; i < prefix.length; i++) {
      if (!node[prefix.charAt(i)]) {
        return [];
      }
      node = node[prefix.charAt(i)];      
    }
    return this.findWordsInNode(prefix, node);
  }
  
  findWordsInNode(prefix, node) {
    console.log(prefix, node);
  }
}

const trie = new Trie();
trie.addWord('abat');
trie.addWord('baba');
trie.addWord('babd');
trie.addWord('babad')
trie.addWord('atal');
console.log(trie.startsWith('bab'));
