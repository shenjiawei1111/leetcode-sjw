class Solution(object):
    def mergeTwoLists(self, list1, list2):
        dummy = ListNode(0)
        current = dummy
        while list1 and list2:
            if list1.val > list2.val:
                current.next = list2
                list2 = list2.next
            else:
                current.next = list1
                list1 = list1.next
            current = current.next
        current.next = list1 if list1 else list2

        return dummy.next
# 定义链表节点类
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution(object):
    def mergeTwoLists(self, list1, list2):
        dummy = ListNode(0)
        current = dummy
        while list1 and list2:
            if list1.val > list2.val:
                current.next = list2
                list2 = list2.next
            else:
                current.next = list1
                list1 = list1.next
            current = current.next
        current.next = list1 if list1 else list2
        return dummy.next

# 创建示例链表 1: 1 -> 2 -> 4
list1 = ListNode(1)
list1.next = ListNode(2)
list1.next.next = ListNode(4)

# 创建示例链表 2: 1 -> 3 -> 4
list2 = ListNode(1)
list2.next = ListNode(3)
list2.next.next = ListNode(4)

# 创建 Solution 实例
solution = Solution()
# 合并两个链表
merged_list = solution.mergeTwoLists(list1, list2)

# 打印合并后的链表
result = []
while merged_list:
    result.append(merged_list.val)
    merged_list = merged_list.next
print("合并后的链表值:", result)  # 输出: [1, 1, 2, 3, 4, 4]
