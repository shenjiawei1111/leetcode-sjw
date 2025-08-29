class Solution(object):
    def detectCycle(self, head):
        fast = head
        slow = head
        has_cycle = 0
        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next
            if (slow == fast):
                has_cycle = True
                break
        if not has_cycle:
            return None
        slow = head
        while slow != fast:
            slow = slow.next
            fast = fast.next
        return slow
# 以下是使用 Solution 类的 detectCycle 方法的示例代码
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

# 创建链表节点
node1 = ListNode(3)
node2 = ListNode(2)
node3 = ListNode(0)
node4 = ListNode(-4)

# 构建链表 3 -> 2 -> 0 -> -4 -> 2 (形成环)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node2

# 创建 Solution 实例
solution = Solution()
# 调用 detectCycle 方法检测环的入口节点
result = solution.detectCycle(node1)
if result:
    print(f"环的入口节点值为: {result.val}")
else:
    print("链表中没有环")
