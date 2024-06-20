// Factory function for creating a node
function createNode(value) {
    return {
        value: value,
        leftChild: null,
        rightChild: null
    };
}

export { createNode };