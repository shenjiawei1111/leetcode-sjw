var diameterOfBinaryTree = function(root) {
    let max_diameter = 0;
    function depth(node){
        if(!node)return 0;
        let left_depth = depth(node.left);
        let right_depth = depth(node.right);
        let current_diameter = left_depth + right_depth;
        max_diameter = Math.max(max_diameter,current_diameter);
        return Math.max(left_depth,right_depth)+1
    }
    depth(root);
    return max_diameter
};
// 示例使用
// 定义二叉树节点类
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// 构建示例二叉树
//       1
//      / \
//     2   3
//    / \
//   4   5
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// 调用函数计算二叉树的直径
const diameter = diameterOfBinaryTree(root);
console.log("该二叉树的直径是: ", diameter); // 输出: 该二叉树的直径是:  3
