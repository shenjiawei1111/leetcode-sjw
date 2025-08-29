var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode(0);
    let current = dummy;
    while(list1 && list2){
        if (list1.val > list2.val){
            current.next = list2;
            list2 = list2.next;
        }
        else{
            current.next = list1;
            list1 = list1.next;
        }
        current = current.next;
    }
    if(list1){
        current.next = list1;
    }
    else if(list2){
        current.next = list2;
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

// 示例用法
const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

const mergedList = mergeTwoLists(list1, list2);

// 打印合并后的链表
let current = mergedList;
let result = [];
while (current) {
    result.push(current.val);
    current = current.next;
}
console.log(result); // 输出: [1, 1, 2, 3, 4, 4]
