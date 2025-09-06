var isValidBST = function(root) {
    const validate = (node,min,max) =>{
        if(!node) return true;
        if(node.val <= min || node.val >= max) return false;
        return validate(node.left, min, node.val) && validate(node.right, node.val, max);
    }
    return validate(root, -Infinity, Infinity);
};
// 以下是使用示例
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// 示例1: 有效的二叉搜索树
//     2
//    / \
//   1   3
const root1 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
console.log(isValidBST(root1)); // 输出: true

// 示例2: 无效的二叉搜索树
//     5
//    / \
//   1   4
//      / \
//     3   6
const root2 = new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6)));
console.log(isValidBST(root2)); // 输出: false
