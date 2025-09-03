class Solution(object):
    def inorderTraversal(self, root):
        result = []
        def helper(node):
            if not node:
                return
            helper(node.left)
            result.append(node.val)
            helper(node.right)

        helper(root)
        return result
# 定义二叉树节点类
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# 定义 Solution 类
class Solution(object):
    def inorderTraversal(self, root):
        result = []
        def helper(node):
            if not node:
                return
            helper(node.left)
            result.append(node.val)
            helper(node.right)

        helper(root)
        return result

# 示例使用
if __name__ == "__main__":
    # 构建二叉树
    #       1
    #        \
    #         2
    #        /
    #       3
    root = TreeNode(1)
    root.right = TreeNode(2)
    root.right.left = TreeNode(3)

    solution = Solution()
    print(solution.inorderTraversal(root))  # 输出: [1, 3, 2]
