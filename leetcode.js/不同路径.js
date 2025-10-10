var uniquePaths = function(m, n) {
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for(let i = 0; i < m; i++){
        dp[i][0] = 1;
    }
    for(let j = 0; j < n; j++){
        dp[0][j] = 1;
    }
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    return dp[m-1][n-1];
};
// 示例调用
const m = 3;
const n = 7;
console.log(`从左上角到右下角，${m} 行 ${n} 列的网格共有 ${uniquePaths(m, n)} 条不同路径`);
