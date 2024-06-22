import { height } from "./createTree.js"

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

export { isBalanced };