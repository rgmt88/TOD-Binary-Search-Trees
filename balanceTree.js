import { height } from "./createTree.js"
import { inOrder } from "./traverse.js";
import { createTree } from "./createTree.js";

function isBalanced(root) {
    if (root === null) {
        return true;
    }
    
    if (Math.abs(height(root.leftChild) - height(root.rightChild)) > 1 ) {
        return false;
    } else {
        return isBalanced(root.leftChild) && isBalanced(root.rightChild);
    }
}

function reBalance(root) {
    if (isBalanced(root) === false) {
        return createTree(inOrder(root)).root;
    }
    return root;
}

export { isBalanced, reBalance };