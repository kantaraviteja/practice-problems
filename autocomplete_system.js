// This problem was asked by Twitter.

// Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

// For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

// Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

class trieNode {
    constructor() {
        this.children = {};
    }
    setChild(e) {
        if (!this.children[e]) {
            this.children[e] = new trieNode();
        }
    }
    hasChild(e) {
        return (this.children[e]) ? true: false;
    }
}

function preProcessDictionaryIntoTrie(dictionary) {
    let root;
    dictionary.forEach((word) => {
        let curr = root;
        [...word].forEach((c) => {
            if (!root) {
                root = new trieNode();
                root.setChild(c);
                curr = root;
            }
            else {
                if (!curr.hasChild(c)) {
                    curr.setChild(c);
                }
            }
            curr = curr.children[c];
        });
    });
    return root;
}

function getAllWords (node, str, res) {
    str = str || "";
    res = res || [];
    
    if (Object.keys(node.children).length === 0) {
        res.push(str);
    }

    Object.keys(node.children).forEach((key) => {
        getAllWords(node.children[key], str + key, res);
    });
    
    return res;
}

function autocompleteSuggestions(str, dictionary) {
    
    let trie = preProcessDictionaryIntoTrie(dictionary);
    let curr = trie;

    [...str].forEach((c)=>{
        if (curr.hasChild(c)) {
            curr = curr.children[c];
        }
    });

    return getAllWords(curr).map(e => str + e);
}

let dictionary = [
    "dog",
    "dope",
    "deer",
    "deal",
    "deep",
    "apple",
    "auto"
];

let testCases = [
    "d",
    "de",
    "dea",
    "a",
    "au"
];

testCases.forEach(str => console.log( autocompleteSuggestions(str, dictionary)) );