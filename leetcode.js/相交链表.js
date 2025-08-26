var getIntersectionNode = function(headA, headB) {
    
        const s1 = [];
        const s2 = [];
        let p = headA;
        let q = headB
        while(p){
            s1.push(p)
            p = p.next
        }
        while(q){
            s2.push(q)
            q = q.next
        }
        let ans = null;
        let i = s1.length - 1
        let j = s2.length - 1
        while(i >= 0 && j >= 0 && s1[i] == s2[j] ){
            ans = s1[i];
            i--
            j--
        }
        return ans;
}
// 示例用法
// 定义链表节点类
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// 创建相交链表
// 公共部分
const commonNode1 = new ListNode(8);
const commonNode2 = new ListNode(4);
const commonNode3 = new ListNode(5);
commonNode1.next = commonNode2;
commonNode2.next = commonNode3;

// 链表 A
const headA = new ListNode(4);
const nodeA2 = new ListNode(1);
headA.next = nodeA2;
nodeA2.next = commonNode1;

// 链表 B
const headB = new ListNode(5);
const nodeB2 = new ListNode(6);
const nodeB3 = new ListNode(1);
headB.next = nodeB2;
nodeB2.next = nodeB3;
nodeB3.next = commonNode1;

// 调用函数获取相交节点
const intersectionNode = getIntersectionNode(headA, headB);
if (intersectionNode) {
    console.log(`相交节点的值为: ${intersectionNode.val}`);
} else {
    console.log('链表未相交');
}
