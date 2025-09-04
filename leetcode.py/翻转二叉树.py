class Solution(object):
    def invertTree(self, root):
        if not root:
            return None
        root.left,root.right = root.right,root.left
        self.invertTree(root.left)
        self.invertTree(root.right)

        return root
# 以下为示例代码，展示如何使用 invertTree 方法
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

if __name__ == "__main__":
    # 构建一个简单的二叉树
    #       4
    #      / \
    #     2   7
    #    / \ / \
    #   1  3 6 9
    root = TreeNode(4)
    root.left = TreeNode(2)
    root.right = TreeNode(7)
    root.left.left = TreeNode(1)
    root.left.right = TreeNode(3)
    root.right.left = TreeNode(6)
    root.right.right = TreeNode(9)

    solution = Solution()
    inverted_root = solution.invertTree(root)

    # 简单打印翻转后的二叉树结构（前序遍历）
    def preorder_traversal(node):
        if node:
            print(node.val, end=" ")
            preorder_traversal(node.left)
            preorder_traversal(node.right)

    print("翻转后的二叉树前序遍历结果:")
    preorder_traversal(inverted_root)
