// This problem was asked by Google.

// A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

// Given the root to a binary tree, count the number of unival subtrees.

// For example, the following tree has 5 unival subtrees:

//    0
//   / \
//  1   0
//     / \
//    1   0
//   / \
//  1   1

class treeNode {
    constructor (data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    isLeaf() {
        return (this.left==null && this.right==null); 
    }
}

let root = new treeNode(1);
root.left = new treeNode(1);
root.right = new treeNode(1);
root.right.right = new treeNode(1);
root.left.left = new treeNode(1);
root.left.right = new treeNode(1);


function number_of_unival_trees(node) {
    let count;
    if (node.isLeaf()) {
        return 1;
    }
    if (!node.left) {
        count = (node.right.data===node.data) ? 1 : 0;
        return count + number_of_unival_trees(node.right);
    }
    if (!node.right) {
        count = (node.left.data===node.data) ? 1 : 0;
        return count + number_of_unival_trees(node.left);
    }

    count = (node.left.data === node.right.data && node.left.data === node.data) ? 1 : 0;
    return count + number_of_unival_trees(node.left) + number_of_unival_trees(node.right);
}

console.log(number_of_unival_trees(root));