var copyRandomList = function(head) {
    if (head === null) return null;
    
    // 哈希表：key = 原节点，value = 对应的复制节点
    const map = new Map();
    let cur = head;
    
    // 第一步：遍历原链表，创建所有复制节点，并存储映射关系
    while (cur !== null) {
        map.set(cur, new Node(cur.val)); // 复制节点值（next和random暂为null）
        cur = cur.next;
    }
    
    // 第二步：再次遍历原链表，设置复制节点的next和random指针
    cur = head;
    while (cur !== null) {
        // 复制节点的next = 原节点next对应的复制节点
        map.get(cur).next = map.get(cur.next) || null;
        // 复制节点的random = 原节点random对应的复制节点
        map.get(cur).random = map.get(cur.random) || null;
        cur = cur.next;
    }
    
    // 返回复制链表的头节点（原头节点对应的复制节点）
    return map.get(head);
};
// 定义随机链表节点类
class Node {
    constructor(val, next = null, random = null) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

// 示例使用
// 创建原链表: 7 -> 13 -> 11 -> 10 -> 1
const node7 = new Node(7);
const node13 = new Node(13);
const node11 = new Node(11);
const node10 = new Node(10);
const node1 = new Node(1);

node7.next = node13;
node13.next = node11;
node11.next = node10;
node10.next = node1;

node7.random = null;
node13.random = node7;
node11.random = node1;
node10.random = node11;
node1.random = node7;

// 调用复制函数
const copiedHead = copyRandomList(node7);

// 打印复制链表的值和random指针指向节点的值
let cur = copiedHead;
while (cur) {
    console.log(`值: ${cur.val}, random指向的值: ${cur.random ? cur.random.val : 'null'}`);
    cur = cur.next;
}
