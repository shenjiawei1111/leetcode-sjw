var swapPairs = function(head) {
    const dummy = new ListNode(0, head);
    let current = dummy;
    while(current.next && current.next.next){
        const first = current.next;
        const second = current.next.next;
        first.next = second.next;
        second.next = first;
        current.next = second;
        current = first;
    }
    return dummy.next;
};
// 定义链表节点类
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// 创建示例链表 1 -> 2 -> 3 -> 4
const node4 = new ListNode(4);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

// 调用 swapPairs 函数
const swappedHead = swapPairs(node1);

// 辅助函数：打印链表
function printList(head) {
    let current = head;
    let result = [];
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(' -> '));
}

// 打印交换后的链表
printList(swappedHead);
