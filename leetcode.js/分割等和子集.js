var canPartition = function(nums) {
    const sum = nums.reduce((acc, num) => acc + num, 0);
    if(sum % 2 != 0) return false;
    const target = sum / 2;
    for(const num of nums){
        if(num > target) return false;
    }

    const dp = new Array(target+1).fill(false);
    dp[0] = true;

    for(const num of nums){
        for(let i = target; i >= num; i--){
            if(dp[i - num]){
                dp[i] = true;
            }
        }
    }
    return dp[target];

};
// 示例使用
const nums1 = [1, 5, 11, 5];
console.log(canPartition(nums1)); // 输出: true

const nums2 = [1, 2, 3, 5];
console.log(canPartition(nums2)); // 输出: false
