from typing import Optional
# 代码存在以下几个问题：
# 1. 未导入 Optional 和 TreeNode 类型，需要添加导入语句
# 2. Solution 类重复定义，需要删除一个
# 3. 注释使用的是 //，Python 中注释应使用 #

# 定义二叉树节点类
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        def helper(node):
            if not node:
                return 0
            leftDepth = helper(node.left)
            rightDepth = helper(node.right)
            return max(leftDepth, rightDepth) + 1

        return helper(root)

# 构建示例二叉树
#       3
#      / \
#     9  20
#       /  \
#      15   7
root = TreeNode(3)
root.left = TreeNode(9)
root.right = TreeNode(20)
root.right.left = TreeNode(15)
root.right.right = TreeNode(7)

# 创建 Solution 实例并计算最大深度
solution = Solution()
depth = solution.maxDepth(root)
print("二叉树的最大深度是:", depth)
