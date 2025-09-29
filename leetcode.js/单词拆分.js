var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict);
    n = s.length;
    const dp = new Array(n+1).fill(false);
    dp[0] = true;
    
    for(let i = 1; i <= n; i++){
        for(let j = 0; j < i; j++){
            if(dp[j] && wordSet.has(s.substring(j,i))){
                dp[i] = true;
                break;
            }
        }
    }
    return dp[n];
};
// 以下是使用 wordBreak 函数的示例
const s = "leetcode";
const wordDict = ["leet", "code"];
const result = wordBreak(s, wordDict);
console.log(`字符串 "${s}" 是否可以由字典 ${JSON.stringify(wordDict)} 拆分: ${result}`);
