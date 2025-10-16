var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    const dp = new Array(m + 1).fill(0).map(() => new Array(n+1).fill(0));

    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            if(text1[i-1] === text2[j-1]){
                dp[i][j] = dp[i-1][j-1] + 1;
            }else{
                dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j]);
            }
        }
    }
    return dp[m][n];
};
// 示例调用
const text1 = "abcde";
const text2 = "ace";
const result = longestCommonSubsequence(text1, text2);
console.log(`"${text1}" 和 "${text2}" 的最长公共子序列长度为: ${result}`); // 输出应为 3
