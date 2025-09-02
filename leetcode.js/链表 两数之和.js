var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;
    while(l1 || l2 || carry){
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        let total = val1 + val2 + carry; 
        let current_val = total % 10;
        carry = Math.floor(total /10);
        current.next = new ListNode(current_val);
        current = current.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
        }
    return dummy.next;
};
// 示例：创建链表节点类
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// 示例用法
// 创建链表 l1: 2 -> 4 -> 3
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
// 创建链表 l2: 5 -> 6 -> 4
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

// 调用函数
const result = addTwoNumbers(l1, l2);

// 辅助函数：打印链表
function printList(head) {
    let current = head;
    const values = [];
    while (current) {
        values.push(current.val);
        current = current.next;
    }
    console.log(values.join(' -> '));
}

// 打印结果
printList(result); // 输出: 7 -> 0 -> 8
