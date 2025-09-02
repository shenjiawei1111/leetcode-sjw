var productExceptSelf = function(nums) {
    const n = nums.length;
    const answer = Array(n).fill(1);
    let prefix = 1;
    for(let i=0 ; i<n ; i++){
        answer[i] = prefix;
        prefix *= nums[i];
    }
    let suffix = 1
    for(let i = n-1 ; i >-1 ; i--){
        answer[i] *= suffix;
        suffix *= nums[i];
    }
    return answer;
};
// 示例用法
const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result); // 输出: [24, 12, 8, 6]
