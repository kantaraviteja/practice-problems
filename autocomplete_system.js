
let dictionary = [
    "dog",
    "deer",
    "deal"
];

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
    getAllWords() {
        let res = [];
        if(Object.keys(this.children).length==0){
            return res;
        }
        else {

        }
    }
}

function preProcessDictionaryIntoTrie (dictionary) {
    let root;
    dictionary.forEach(function(word){
        let curr = root;
        [...word].forEach(function(c){
            if(!root) {
                root = new trieNode();
                curr = root;
                curr.setChild(c);
            }
            else {
                if(!curr.hasChild(c)){
                    curr.setChild(c);
                }
                curr = curr.children[c];
            }
        });
    });
    return root;
}

// console.log(JSON.stringify(preProcessDictionaryIntoTrie(dictionary)));
function getAllWords (node) {
        Object.keys(node.children).forEach(function(c){
            let arr = getAllWords(node.children[c]);
            console.log(arr);
            if (arr && arr.length > 0){
                return arr.map(e=>c+e);
            }
            else {
                return [c];
            }
        });

}
function autocompleteSuggestions(str, dictionary) {
    let trie = preProcessDictionaryIntoTrie(dictionary);
    let curr = trie;
    console.log(getAllWords(trie));
    // [...str].forEach(function(c){
    //     if (curr.hasChild(c)) {
    //         curr = curr.children[c];
    //     }
    // });
    // console.log(curr.children);

}

autocompleteSuggestions("de",dictionary);

// getAllWords();