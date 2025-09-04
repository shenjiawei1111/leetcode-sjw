class Solution(object):
    def isSymmetric(self, root):
        if not root:
            return True
        def isMirror(left,right):
            if(not left and not right):
                return True
            if(not left or not right):
                return False
            if(left.val != right.val):
                return False
            return isMirror(left.left,right.right)  and isMirror(left.right,right.left)
        # 以下为创建实例并调用的示例
        # 首先定义二叉树节点类
        class TreeNode:
            def __init__(self, val=0, left=None, right=None):
                self.val = val
                self.left = left
                self.right = right
        # 构建一个对称二叉树实例
        #       1
        #      / \
        #     2   2
        #    / \ / \
        #   3  4 4  3
        root = TreeNode(1)
        root.left = TreeNode(2)
        root.left.left = TreeNode(3)
        root.left.right = TreeNode(4)
        root.right = TreeNode(2)
        root.right.left = TreeNode(4)
        root.right.right = TreeNode(3)
        # 调用 isMirror 函数判断是否对称
        result = isMirror(root.left, root.right)
        return result
