var climbStairs = function(n) {
    if(n === 1 || n === 2) return n;
    let a = 1;
    let b = 2;
    for(let i = 3; i <= n; i++){
        const temp = b;
        b = a + b;
        a = temp;
    }
    return b;
};
// 示例用法
console.log(climbStairs(3)); // 输出: 3
console.log(climbStairs(4)); // 输出: 5
console.log(climbStairs(5)); // 输出: 8
