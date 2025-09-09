var flatten = function(root) {
    if(!root) return [];
    let current = root;
    while(current){
        if(current.left){
            let rightmost = current.left;
            while(rightmost.right){
                rightmost = rightmost.right;
            }
            rightmost.right = current.right;
            current.right = current.left;
            current.left = null;
        }
        current = current.right;
    }
};
// 定义二叉树节点类
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// 创建示例二叉树
//       1
//      / \
//     2   5
//    / \   \
//   3   4   6
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(6);

// 调用 flatten 函数
flatten(root);

// 打印展开后的结果
let current = root;
let result = [];
while (current) {
    result.push(current.val);
    current = current.right;
}
console.log("展开后的链表值序列:", result); // 预期输出: [1, 2, 3, 4, 5, 6]
