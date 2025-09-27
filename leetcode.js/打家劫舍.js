var rob = function(nums) {
    n = nums.length;
    if(n === 0) return 0;
    if(n === 1) return nums[0];

    const dp = new Array(n+1).fill(0);
    dp[1] = nums[0];
    dp[2] = Math.max(nums[0], nums[1]);

    for(let i = 3; i <= n; i++){
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i-1]);
    }
    return dp[n]; 
};
// 示例用法
const nums1 = [1, 2, 3, 1];
console.log(rob(nums1)); // 输出: 4

const nums2 = [2, 7, 9, 3, 1];
console.log(rob(nums2)); // 输出: 12

const nums3 = [];
console.log(rob(nums3)); // 输出: 0
