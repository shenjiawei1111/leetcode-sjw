from collections import deque
# 代码报错的原因是没有导入 deque，需要在文件开头添加 from collections import deque
class Solution(object):
    def levelOrder(self, root):
        if not root:
            return []
        queue = deque([root])
        result = []
        while(queue):
            levelSize = len(queue)
            currentLevel = [];
            for i in range(levelSize):
                node = queue.popleft()
                currentLevel.append(node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            result.append(currentLevel)
        return result
# 以下是使用示例
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

if __name__ == "__main__":
    # 构建一个简单的二叉树
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

    solution = Solution()
    print(solution.levelOrder(root))  # 输出: [[3], [9, 20], [15, 7]]
