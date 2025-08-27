class Solution(object):
    def reverseList(self, head):
        prev = None
        curr = head
        while curr:
            next_temp = curr.next
            curr.next = prev
            prev = curr
            curr = next_temp
        return prev
# 以下是代码使用示例
if __name__ == "__main__":
    # 定义链表节点类
    class ListNode:
        def __init__(self, val=0, next=None):
            self.val = val
            self.next = next

    # 创建一个示例链表 1 -> 2 -> 3 -> 4 -> 5
    head = ListNode(1)
    head.next = ListNode(2)
    head.next.next = ListNode(3)
    head.next.next.next = ListNode(4)
    head.next.next.next.next = ListNode(5)

    # 创建 Solution 类的实例
    solution = Solution()

    # 调用 reverseList 方法反转链表
    reversed_head = solution.reverseList(head)

    # 打印反转后的链表
    current = reversed_head
    while current:
        print(current.val, end=" -> " if current.next else "\n")
        current = current.next
