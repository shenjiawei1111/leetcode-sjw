var pathSum = function(root, targetSum) {

    const countPaths = (node) => {
        if(!node) return 0;
        return countFromNode(node, targetSum) + countPaths(node.left) + countPaths(node.right);
    }

    const countFromNode = (node, remainingSum) => {
        if(!node) return 0;
        const isTarget = node.val === remainingSum ? 1:0;
        const leftCount = countFromNode(node.left, remainingSum - node.val);
        const rightCount = countFromNode(node.right, remainingSum - node.val);
        return isTarget + leftCount + rightCount;
    }

    return countPaths(root);
};
// 示例用法
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// 构建二叉树
//       10
//      /  \
//     5   -3
//    / \    \
//   3   2   11
//  / \   \
// 3  -2   1
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(-3);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(2);
root.right.right = new TreeNode(11);
root.left.left.left = new TreeNode(3);
root.left.left.right = new TreeNode(-2);
root.left.right.right = new TreeNode(1);

const targetSum = 8;
console.log(pathSum(root, targetSum)); // 输出符合路径和为 8 的路径数量
