var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0, head);
    let fast = dummy;
    let slow = dummy;
    for(let i = 0; i < n; i++){
        fast = fast.next;
    }
    while(fast.next){
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
};
// 定义链表节点类
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// 创建链表辅助函数
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// 打印链表辅助函数
function printLinkedList(head) {
    let current = head;
    let result = [];
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(' -> '));
}

// 示例用法
const list = createLinkedList([1, 2, 3, 4, 5]);
console.log('原始链表:');
printLinkedList(list);

const n = 2;
const newHead = removeNthFromEnd(list, n);
console.log(`删除倒数第 ${n} 个节点后的链表:`);
printLinkedList(newHead);
