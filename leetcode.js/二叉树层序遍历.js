var levelOrder = function(root) {
    if(!root)return[];
    const queue = [root];
    const list = [];
    while(queue.length){
        const levelSize = queue.length;
        const currentLevel = [];
        for(let i=0; i<levelSize;i++){
            const node = queue.shift();
            currentLevel.push(node.val);
            if(node.left)queue.push(node.left);
            if(node.right)queue.push(node.right);
        }
        list.push(currentLevel);
    }
    return list;
};
// 示例用法
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// 构建示例二叉树
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

// 调用层序遍历函数
const result = levelOrder(root);
console.log(result); // 输出: [[3], [9, 20], [15, 7]]
