var reverseList = function(head) {
    let prev = null; // 原代码中 None 拼写错误，JavaScript 中应为 null
    let curr = head;
    while(curr){
        let next_temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next_temp;
    }
    return prev;
};