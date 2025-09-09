var buildTree = function(preorder, inorder) {
    const inorderMap = new Map();
    for(let i = 0; i < inorder.length; i++){
        inorderMap.set(inorder[i], i);
    }
    const build = (preStart, preEnd, inStart, inEnd) => {
        if(preStart > preEnd || inStart > inEnd) return null;
        const rootval = preorder[preStart];
        const root = new TreeNode(rootval);

        const rootIndex = inorderMap.get(rootval);
        const leftSize = rootIndex - inStart;

        root.left = build(
            preStart + 1,
            preStart + leftSize,
            inStart,
            rootIndex - 1
        );
        
        root.right = build(
            preStart + leftSize + 1,
            preEnd,
            rootIndex + 1,
            inEnd
        );
       return root; 
    }
    return build(0, preorder.length - 1, 0, inorder.length - 1);  
};
// 示例使用代码
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// 前序遍历序列
const preorder = [3, 9, 20, 15, 7];
// 中序遍历序列
const inorder = [9, 3, 15, 20, 7];

// 构造二叉树
const root = buildTree(preorder, inorder);

// 简单的前序遍历函数，用于验证结果
function preOrderTraversal(node) {
    if (!node) return [];
    return [node.val, ...preOrderTraversal(node.left), ...preOrderTraversal(node.right)];
}

console.log("构造的二叉树前序遍历结果:", preOrderTraversal(root));
