import { prettyPrint } from "./prettyPrint.js";
import { createTree, insert, deleteItem, find } from "./createTree.js";

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = createTree(array).root; 
console.log(tree);
prettyPrint(tree);
prettyPrint(insert(tree, 666));
prettyPrint(deleteItem(tree, 8));
prettyPrint(find(tree, 4));


