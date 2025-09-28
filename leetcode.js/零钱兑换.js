var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for(let i = 1; i <= amount; i++){
        for(const coin of coins){
            if (coin <= i){
                dp[i] = Math.min(dp[i], dp[i-coin] + 1);
            }
        }
    }
    return dp[amount] === Infinity? -1:dp[amount];
};
// 以下是 coinChange 函数的使用示例
const coins = [1, 2, 5];
const amount = 11;
const result = coinChange(coins, amount);
console.log(`使用硬币 ${coins} 凑成金额 ${amount} 所需的最少硬币数为: ${result}`);
