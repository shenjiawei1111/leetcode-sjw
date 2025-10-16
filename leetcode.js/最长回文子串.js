var longestPalindrome = function(s) {
    const n = s.length;
    if(n < 2) return s;
    let start = 0, maxlen = 1;
    const expand = (left, right) => {
        while(left >= 0 && right < n && s[left] === s[right]){
            left--;
            right++;
        }
        return right - left - 1;
    }
    for(let i = 0; i < n; i ++){
        const len1 = expand(i, i);
        const len2 = expand(i, i + 1);
        const curMax = Math.max(len1, len2); 
        if(curMax > maxlen){
            maxlen = curMax;
            start = i - Math.floor((curMax - 1) / 2);
        }
    }

    return s.substring(start, start + maxlen);
};

var longestPalindrome = function(s) {
    const n = s.length;
    if(n < 2) return s;
    
    // 二维DP数组：dp[i][j]表示s[i..j]是否为回文串
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(false));
    let start = 0, maxlen = 1;  // 最长回文的起始索引和长度
    
    // 初始化：单个字符都是回文
    for(let i = 0; i < n; i++){
        dp[i][i] = true;
    }

    // 按子串长度从2到n遍历
    for(let len = 2; len <= n; len++){
        // 遍历所有起始索引i，计算结束索引j
        for(let i = 0; i <= n - len; i++){
            const j = i + len - 1;  // 子串s[i..j]的结束索引

            // 若首尾字符相等
            if(s[i] === s[j]){
                // 正确判断：长度为2（如"aa"）或内部子串s[i+1..j-1]是回文
                if(len === 2 || dp[i+1][j-1]){
                    dp[i][j] = true;  // 标记当前子串为回文

                    // 更新最长回文子串
                    if(len > maxlen){
                        maxlen = len;
                        start = i;
                    }
                }
            }
        }
    }
    
    // 截取并返回最长回文子串
    return s.substring(start, maxlen + start);
};
// 以下是 `longestPalindrome` 函数的使用示例
const testCases = [
    { input: "babad", expected: "bab" },  // 输出可能是 "bab" 或 "aba"
    { input: "cbbd", expected: "bb" },
    { input: "a", expected: "a" },
    { input: "ac", expected: "a" },
    { input: "racecar", expected: "racecar" }
];

testCases.forEach((testCase, index) => {
    const result = longestPalindrome(testCase.input);
    console.log(`测试用例 ${index + 1}:`);
    console.log(`输入: "${testCase.input}"`);
    console.log(`预期输出: "${testCase.expected}"`);
    console.log(`实际输出: "${result}"`);
    console.log(`测试结果: ${result === testCase.expected ? '通过' : '失败'}`);
    console.log('----------------------');
});
