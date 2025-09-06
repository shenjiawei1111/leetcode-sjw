class Solution(object):
    def diameterOfBinaryTree(self, root):
        self.max_diameter = 0
        def depth(node):
            if not node:
                return 0
            
            left_depth = depth(node.left)
            rigth_depth = depth(node.right)

            current_diameter = left_depth +rigth_depth
            self.max_diameter = max(self.max_diameter,current_diameter)

            return max(left_depth,rigth_depth) + 1
        depth(root)
        return self.max_diameter
# 以下为示例代码，展示如何使用 Solution 类计算二叉树的直径
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

if __name__ == "__main__":
    # 构建一个示例二叉树
    #       1
    #      / \
    #     2   3
    #    / \
    #   4   5
    root = TreeNode(1)
    root.left = TreeNode(2)
    root.right = TreeNode(3)
    root.left.left = TreeNode(4)
    root.left.right = TreeNode(5)

    solution = Solution()
    diameter = solution.diameterOfBinaryTree(root)
    print(f"该二叉树的直径是: {diameter}")  # 预期输出: 3
