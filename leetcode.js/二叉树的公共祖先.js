var lowestCommonAncestor = function(root, p, q) {
    if(root === null || root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    
    if(left != null && right != null) return root;
    else if(left != null) return left;
    else return right;
};
// 示例代码
// 定义二叉树节点类
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// 构建示例二叉树
//       3
//      / \
//     5   1
//    / \ / \
//   6  2 0  8
//     / \
//    7   4
const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

// 定义 p 和 q
const p = root.left;    // 节点 5
const q = root.left.right.right; // 节点 4

// 调用函数获取最近公共祖先
const result = lowestCommonAncestor(root, p, q);
console.log(`节点 ${p.val} 和节点 ${q.val} 的最近公共祖先是节点 ${result.val}`); // 输出: 节点 5 和节点 4 的最近公共祖先是节点 5
