var sortedArrayToBST = function(nums) {
    const buildST = (left,right) => {
        if(left > right) return null;
        const mid = left + Math.floor((right - left)/2);
        const node = new TreeNode(nums[mid]);
        node.left = buildST(left , mid - 1);
        node.right = buildST(mid + 1 , right);
        return node;
    }
    return buildST(0 , nums.length - 1);
};
// 示例使用
// 定义 TreeNode 类
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// 示例数组
const nums = [-10, -3, 0, 5, 9];
// 调用函数构建二叉搜索树
const root = sortedArrayToBST(nums);

// 简单的前序遍历函数，用于验证结果
const preorderTraversal = (node) => {
    if (!node) return [];
    return [node.val, ...preorderTraversal(node.left), ...preorderTraversal(node.right)];
};

console.log("构建的二叉搜索树前序遍历结果:", preorderTraversal(root));
