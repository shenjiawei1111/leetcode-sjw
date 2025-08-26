class Solution(object):
    def getIntersectionNode(self, headA, headB):
        """
        :type head1, head1: ListNode
        :rtype: ListNode
        """
        s1, s2 = [],[]
        p, q = headA, headB
        while p :
            s1.append(p)
            p = p.next
        while q:
            s2.append(q)
            q=q.next
        
        ans = None
        i = len(s1) -1 
        j = len(s2) -1
        while i >=0 and j>=0 and s1[i]==s2[j]:
            ans = s1[i]
            i-=1
            j-=1
            
        return ans
# 定义链表节点类
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

# 创建相交链表示例
# 创建链表 A: 4 -> 1 -> 8 -> 4 -> 5
headA = ListNode(4)
nodeA1 = ListNode(1)
nodeInter = ListNode(8)
nodeA3 = ListNode(4)
nodeA4 = ListNode(5)

headA.next = nodeA1
nodeA1.next = nodeInter
nodeInter.next = nodeA3
nodeA3.next = nodeA4

# 创建链表 B: 5 -> 6 -> 1 -> 8 -> 4 -> 5
headB = ListNode(5)
nodeB1 = ListNode(6)
nodeB2 = ListNode(1)

headB.next = nodeB1
nodeB1.next = nodeB2
nodeB2.next = nodeInter

# 创建 Solution 实例并调用方法
solution = Solution()
intersection_node = solution.getIntersectionNode(headA, headB)

if intersection_node:
    print(f"相交节点的值为: {intersection_node.val}")
else:
    print("链表未相交")
