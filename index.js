// Factory function for creating a node
function createNode(value) {
    return {
        value: value,
        leftChild: null,
        rightChild: null
    };
}

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

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.rightChild !== null) {
      prettyPrint(node.rightChild, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.leftChild !== null) {
      prettyPrint(node.leftChild, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
 
prettyPrint(createTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]).root);