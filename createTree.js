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

function deleteItem(node, value) {
    if (node ===  null) {
        return null;
    }

    // Navigate down the tree
    if (value < node.value) {
        node.leftChild = deleteItem(node.leftChild, value);
    } else if (value > node.value) {
        node.rightChild = deleteItem(node.rightChild, value);
    } else {
        // Node found. Now let's handle the three cases:
        // Case 1: No children (leaf node)
        if (node.leftChild === null && node.rightChild === null) {
            return null;
        }

        // Case 2: One child
        if (node.leftChild === null) {
            return node.rightChild;
        } else if (node.rightChild === null) {
            return node.leftChild;
        }

        // Case 3: Two children
        // Find the smallest value in the right subtree
        let smallestRight = findSmallest(node.rightChild);
        node.value = smallestRight.value;
        node.rightChild = deleteItem(node.rightChild, smallestRight.value);
    }

    return node;
 
}

function findSmallest(node) {
    while (node.leftChild !== null) {
        node = node.leftChild;
    }
    return node;
}

export { createTree, insert, deleteItem };