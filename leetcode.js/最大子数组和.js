var maxSubArray = function(nums) {
    if(!nums){
        return 0;
    }
    let current_max = 0;
    let global_max = 0;
    for(i = 1;i < nums.length; i++){
        current_max = Math.max(nums[i] ,nums[i] + current_max);
        if(current_max > global_max){
            global_max = current_max;
        }
    }
    return global_max;
};
// 以下是使用 maxSubArray 函数的示例
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArray(nums);
console.log(`最大子数组和为: ${result}`); // 预期输出: 最大子数组和为: 6

