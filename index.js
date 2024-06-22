import { prettyPrint } from "./prettyPrint.js";
import { createTree, insert, deleteItem, find, height, depth } from "./createTree.js";
import { levelOrder, inOrder, preOrder, postOrder } from "./traverse.js"
import { isBalanced } from "./balanceTree.js";

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = createTree(array).root; 
console.log(tree);
prettyPrint(tree);
prettyPrint(insert(tree, 666));
prettyPrint(deleteItem(tree, 8));
prettyPrint(find(tree, 4));
console.log(levelOrder(tree));
console.log(inOrder(tree));
console.log(preOrder(tree));
console.log(postOrder(tree));
console.log(height(tree));
console.log(depth(tree.leftChild, tree));
console.log(isBalanced(tree));


