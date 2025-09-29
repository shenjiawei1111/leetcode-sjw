var lengthOfLIS = function(nums) {
    n = nums.length;
    let max = 1;
    if(n === 0) return 0;
    const dp = new Array(n + 1).fill(1);
    for(let i = 1; i <= n; i++){
        for(let j = 0; j < i; j++){
            if(nums[j] < nums[i]){
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        max = Math.max(dp[i], max);
    }
    return max;
};
// 示例使用
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums)); // 输出: 4
