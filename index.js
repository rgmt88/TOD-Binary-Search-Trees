import { prettyPrint } from "./prettyPrint.js";
import { createTree, insert, deleteItem, find, height, depth } from "./createTree.js";
import { levelOrder, inOrder, preOrder, postOrder } from "./traverse.js"
import { isBalanced, reBalance } from "./balanceTree.js";

function randomArray(arraySize = 50, max = 100) {
    const result = [];
    while (result.length < arraySize) {
        result.push(Math.floor(Math.random() * max));
    }
    return result;
}

function driverScript() {
    // Create a binary search tree from a random array
    const array = randomArray();
    const tree = createTree(array).root;

    // Check if the initial tree is balanced
    console.log('Initial tree balanced:', isBalanced(tree));

    // Print all elements in different tree traversals
    console.log('Level order:', levelOrder(tree));
    console.log('In-order:', inOrder(tree));
    console.log('Pre-order:', preOrder(tree));
    console.log('Post-order:', postOrder(tree));

    // Unbalance the tree by adding several large numbers
    insert(tree, 101);
    insert(tree, 666);
    insert(tree, 999);

    // Check if the tree is now unbalanced
    console.log('Tree balanced after insertions:', isBalanced(tree));

    // Rebalance the tree
    const rebalancedTree = reBalance(tree);

    // Check if the tree is balanced after rebalancing
    console.log('Tree balanced after rebalancing:', isBalanced(rebalancedTree));

    // Print all elements in different tree traversals again
    console.log('Level order after rebalancing:', levelOrder(rebalancedTree));
    console.log('In-order after rebalancing:', inOrder(rebalancedTree));
    console.log('Pre-order after rebalancing:', preOrder(rebalancedTree));
    console.log('Post-order after rebalancing:', postOrder(rebalancedTree));

    // Optionally, pretty print the tree for visual inspection
    prettyPrint(rebalancedTree);

    return rebalancedTree;
}

driverScript();