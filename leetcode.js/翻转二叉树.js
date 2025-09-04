var invertTree = function(root) {
    if(!root){
        return null;
    }
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
    
    return root;
};
// 示例使用代码
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// 构建一个示例二叉树
//       4
//      / \
//     2   7
//    / \ / \
//   1  3 6  9
const root = new TreeNode(4);
root.left = new TreeNode(2);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right = new TreeNode(7);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);

// 打印翻转前的二叉树（简单前序遍历）
function preOrderTraversal(node) {
    if (!node) return [];
    return [node.val, ...preOrderTraversal(node.left), ...preOrderTraversal(node.right)];
}
console.log('翻转前:', preOrderTraversal(root));

// 翻转二叉树
const invertedRoot = invertTree(root);

// 打印翻转后的二叉树
console.log('翻转后:', preOrderTraversal(invertedRoot));
