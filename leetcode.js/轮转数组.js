var rotate = function(nums, k) {
    const n = nums.length;
    if (n == 0) return nums; 
    k = k % n;
    
    nums.splice(0,0,...nums.splice(n-k,k));
    return nums
};
// 示例用法
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
console.log('原数组:', nums);
const rotatedNums = rotate(nums, k);
console.log('轮转后的数组:', rotatedNums);
