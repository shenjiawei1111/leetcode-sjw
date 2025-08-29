var detectCycle = function(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
        if(slow == fast){
            slow = head;
            while(slow != fast){
                fast = fast.next;
                slow = slow.next;
            }
            return slow;
        }
    }
    return null;

};
// 以下是 detectCycle 函数的使用示例
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// 创建一个带环的链表 3 -> 2 -> 0 -> -4，环的入口是节点 2
const node1 = new ListNode(3);
const node2 = new ListNode(2);
const node3 = new ListNode(0);
const node4 = new ListNode(-4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // 形成环

// 调用 detectCycle 函数检测环的入口
const cycleStartNode = detectCycle(node1);
if (cycleStartNode) {
    console.log(`检测到环的入口节点值为: ${cycleStartNode.val}`);
} else {
    console.log('未检测到环');
}
