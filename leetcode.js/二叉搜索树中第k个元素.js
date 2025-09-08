var kthSmallest = function(root, k) {
    const stack = [];
    let count = 0;
    let current = root;
    while(current || stack.length > 0){
        while(current){
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();
        count ++;
        if(count === k)return current.val;

        current = current.right;
    }
    return -1;
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

// 构建一个二叉搜索树
//       3
//      / \
//     1   4
//      \
//       2
const root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.left.right = new TreeNode(2);

// 查找第 1 小的元素
const k = 1;
const result = kthSmallest(root, k);
console.log(`二叉搜索树中第 ${k} 小的元素是: ${result}`); // 输出: 二叉搜索树中第 1 小的元素是: 1
