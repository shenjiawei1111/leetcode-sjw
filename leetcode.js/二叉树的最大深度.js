var maxDepth = function(root) {
    function helper(node){
        if(!node){
            return 0;
        }
        let leftDepth = helper(node.left);
        let rightDepth = helper(node.right);
        return Math.max(leftDepth,rightDepth) + 1;
    }
    return helper(root);
};
// 示例：创建一个二叉树并计算其最大深度
// 定义二叉树节点类
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// 构建一个简单的二叉树
//       3
//      / \
//     9  20
//       /  \
//      15   7
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

// 调用 maxDepth 函数计算最大深度
const depth = maxDepth(root);
console.log("二叉树的最大深度是: ", depth); // 输出: 二叉树的最大深度是:  3
