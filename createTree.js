import { createNode } from "./createNode.js";

// Factory function for creating a tree
function createTree(array) {
    const prepareArray = (array) => {
        let sortedArray = array.slice().sort((a, b) => a - b);
        let uniqueArray = sortedArray.filter((value, index, self) => {
            return self.indexOf(value) === index;  // Eliminate duplicates
        });
        return uniqueArray;
    };

    const buildTree = (sortedArray, start, end) => {
        if (start > end) {
            return null;
        }
        let mid = Math.floor((start + end) / 2);
        let node = createNode(sortedArray[mid]);
        node.leftChild = buildTree(sortedArray, start, mid - 1);
        node.rightChild = buildTree(sortedArray, mid + 1, end);
        return node;
    };

    let sortedUniqueArray = prepareArray(array);
    
    return {
        root: buildTree(sortedUniqueArray, 0, sortedUniqueArray.length - 1)
    };
}

function insert(node, value) {
    if (node === null) {
        return createNode(value);
    };

    if (value < node.value) {
        node.leftChild = insert(node.leftChild, value);
    } else if (value > node.value) {
        node.rightChild = insert(node.rightChild, value);
    }

    return node;
}

export { createTree, insert };