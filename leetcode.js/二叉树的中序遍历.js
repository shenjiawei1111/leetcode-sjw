var inorderTraversal = function(root) {
    let result = [];
    function helper(node){
        if(!node){
            return;
        }
        helper(node.left);
        result.push(node.val);
        helper(node.right);
    }
    helper(root);
    return result;
};
// 示例使用代码
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// 构建示例二叉树
//       1
//        \
//         2
//        /
//       3
const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

// 调用中序遍历函数
const result = inorderTraversal(root);
console.log(result); // 输出: [1, 3, 2]
