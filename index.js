import { prettyPrint } from "./prettyPrint.js";
import { createTree } from "./createTree.js";
import { createNode } from "./createNode.js";

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = createTree(array); 
console.log(tree.root);
prettyPrint(tree.root);

function insert(value, root) {
    if (root === null) {
        root = createNode(value);
    };

    
}