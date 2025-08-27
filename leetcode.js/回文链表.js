var isPalindrome = function(head) {
    if(!head || !head.next){
        return true; // 修正：JavaScript 中布尔值为小写 true
    }
    let slow = head;
    let fast = head;
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    const second_half_head = slow.next;
    let prev = null;
    let curr = second_half_head;
    while(curr){
        let next_temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next_temp;
    }
    let first_half_head = head;
    while(prev){
        if(first_half_head.val != prev.val){
            return false; // 修正：JavaScript 中布尔值为小写 false
        }
        first_half_head = first_half_head.next;
        prev = prev.next;
    }
    return true; // 修正：JavaScript 中布尔值为小写 true
};