var sortList = function(head) {
    if(head === null ||head.next === null) return head;
    let res = [];
    let p = head;
    while(p){
        res.push(p.val);
        p = p.next;
    }
    res = res.sort((a,b) => a-b);
    const head1 = new ListNode(0)
    let current = head1;
    for(let i = 0; i < res.length; i++){
        current.next = new ListNode(res[i]);
        current = current.next;
    }
    return head1.next;

};
// 示例代码
// 定义链表节点类
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// 创建链表
function createList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// 打印链表
function printList(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(' -> '));
}

// 示例使用
const inputList = createList([4, 2, 1, 3]);
console.log('排序前:');
printList(inputList);
const sortedList = sortList(inputList);
console.log('排序后:');
printList(sortedList);
