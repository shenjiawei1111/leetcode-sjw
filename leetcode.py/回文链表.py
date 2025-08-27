class Solution(object):
    def isPalindrome(self, head):
        if not head or not head.next:
            return True
        slow = head
        fast = head
        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next
        sencond_half_head = slow.next
        prev = None
        curr = sencond_half_head
        while curr:
            next_temp = curr.next
            curr.next = prev
            prev = curr
            curr = next_temp
        first_half_head = head
        while prev:
            if first_half_head.val != prev.val:
                return False
            first_half_head = first_half_head.next
            prev = prev.next
        return True
# 以下为示例代码，展示如何调用 isPalindrome 方法
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

if __name__ == "__main__":
    # 构建一个回文链表 1 -> 2 -> 2 -> 1
    node4 = ListNode(1)
    node3 = ListNode(2, node4)
    node2 = ListNode(2, node3)
    node1 = ListNode(1, node2)
    
    solution = Solution()
    print(solution.isPalindrome(node1))  # 输出: True

    # 构建一个非回文链表 1 -> 2 -> 3 -> 4
    node8 = ListNode(4)
    node7 = ListNode(3, node8)
    node6 = ListNode(2, node7)
    node5 = ListNode(1, node6)
    
    print(solution.isPalindrome(node5))  # 输出: False
