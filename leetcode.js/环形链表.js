var hasCycle = function(head) {
    let fast = head;
    let slow = head;
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
        if(fast == slow){
            return true;
        }
    }
    return false;
};
// 示例用法
// 定义链表节点类
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// 创建链表 3 -> 2 -> 0 -> -4，其中 -4 指向节点 2 形成环
const node1 = new ListNode(3);
const node2 = new ListNode(2);
const node3 = new ListNode(0);
const node4 = new ListNode(-4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // 形成环

console.log(hasCycle(node1)); // 输出: true

// 创建无环链表 1 -> 2
const node5 = new ListNode(1);
const node6 = new ListNode(2);
node5.next = node6;

console.log(hasCycle(node5)); // 输出: false
