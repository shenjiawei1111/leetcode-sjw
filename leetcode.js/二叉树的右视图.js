var rightSideView = function(root) {
    if(!root) return [];

    const queue = [root];
    const result = [];
    while(queue.length > 0){
        const levelSize = queue.length
        for(let i = 0; i < levelSize; i++){
            const node = queue.shift();
        if(i === levelSize -1){
            result.push(node.val);
        }

        if(node.left)queue.push(node.left);
        if(node.right)queue.push(node.right);
        }
    }
    return result;
};
// 示例代码
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
//      \   \
//       5   4
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(4);

// 调用 rightSideView 函数
const result = rightSideView(root);
console.log(result); // 输出: [1, 3, 4]
