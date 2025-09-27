var numSquares = function(n) {
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;
    for(let i = 1; i <= n; i++){
        for(let j = 1; j*j <= i; j++){
            const square= j * j;
            dp[i] = Math.min(dp[i], dp[i-square] + 1);
        }
    }
    return dp[n];
};
// 以下是使用 numSquares 函数的示例
const result = numSquares(12);
console.log(`组成数字 12 的最少完全平方数数量为: ${result}`); // 输出应为 3，因为 12 = 4 + 4 + 4

const result2 = numSquares(13);
console.log(`组成数字 13 的最少完全平方数数量为: ${result2}`); // 输出应为 2，因为 13 = 4 + 9
