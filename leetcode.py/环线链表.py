class Solution(object):
    def hasCycle(self, head):
        slow = head
        fast = head
        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next
            if fast == slow:
                return True
        return False
            
# 定义链表节点类
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

# 创建示例并测试 hasCycle 方法
if __name__ == "__main__":
    # 创建无环链表 1->2->3->4
    node1 = ListNode(1)
    node2 = ListNode(2)
    node3 = ListNode(3)
    node4 = ListNode(4)
    node1.next = node2
    node2.next = node3
    node3.next = node4

    solution = Solution()
    print("无环链表测试结果:", solution.hasCycle(node1))  # 预期输出: False

    # 创建有环链表 1->2->3->4->2 (形成环)
    node1 = ListNode(1)
    node2 = ListNode(2)
    node3 = ListNode(3)
    node4 = ListNode(4)
    node1.next = node2
    node2.next = node3
    node3.next = node4
    node4.next = node2  # 形成环

    print("有环链表测试结果:", solution.hasCycle(node1))  # 预期输出: True
