function levelOrder(root, callback) {
    if (root === null) {
        return [];
    }

    const queue = [root];
    const result = [];

    while (queue.length > 0) {
        // Dequeue the first node
        const currentNode = queue.shift();

        if (callback) {
            // Perform the callback on the current node
            callback(currentNode);
        } else {
            // Collect values if no callback is provided
            result.push(currentNode.value);
        }

        if (currentNode.leftChild) {
            // Enqueue left child
            queue.push(currentNode.leftChild);
        }
        if (currentNode.rightChild) {
            // Enqueue right child
            queue.push(currentNode.rightChild);
        }
    }

    return callback ? undefined : result;
}

function inOrder(root, callback) {
    const result = [];

    function inOrderTraverse(node) {
        if (node === null) {
            return null;
        }

        // First, visit the left child (subtree)
        inOrderTraverse(node.leftChild);

        // Then, process the current node
        if (callback) {
            callback(node);
        } else {
            result.push(node.value);
        }

        // Finally, visit the right child (subtree)
        inOrderTraverse(node.rightChild);
    }

    inOrderTraverse(root);
    return callback ? undefined : result;
}

function preOrder(root, callback) {
    const result = [];

    function preOrderTraverse(node) {
        if (node === null) {
            return null;
        }
        
        if (callback) {
            callback(node);
        } else {
            result.push(node.value);
        }

        preOrderTraverse(node.leftChild);
        preOrderTraverse(node.rightChild);
    }

    preOrderTraverse(root);
    return callback ? undefined : result;
}

export { levelOrder, inOrder, preOrder };