var isSymmetric = function(root) {
    if(!root) return true;
    const ismirror = (left,right) => {
        if(!left && !right) return true;
        if(!left || !right) return false;
        if(left.val !== right.val) return false;
        return ismirror(left.left , right.right) && ismirror(left.right , right.left);
    }
    return ismirror(root.left,root.right);

};
// 示例用法
// 定义二叉树节点类
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// 构建对称二叉树
const symmetricTree = new TreeNode(1);
symmetricTree.left = new TreeNode(2);
symmetricTree.right = new TreeNode(2);
symmetricTree.left.left = new TreeNode(3);
symmetricTree.left.right = new TreeNode(4);
symmetricTree.right.left = new TreeNode(4);
symmetricTree.right.right = new TreeNode(3);

// 构建非对称二叉树
const nonSymmetricTree = new TreeNode(1);
nonSymmetricTree.left = new TreeNode(2);
nonSymmetricTree.right = new TreeNode(2);
nonSymmetricTree.left.right = new TreeNode(3);
nonSymmetricTree.right.right = new TreeNode(3);

console.log(isSymmetric(symmetricTree)); // 输出: true
console.log(isSymmetric(nonSymmetricTree)); // 输出: false
