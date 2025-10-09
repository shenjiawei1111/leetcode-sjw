var maxProduct = function(nums) {
    const n = nums.length
    if(n === 0) return 0;
    const dp_max = new Array(n).fill(0);
    const dp_min = new Array(n).fill(0);
    dp_max[0] = nums[0];
    dp_min[0] = nums[0];
    let max_product = nums[0];

    for(let i = 1; i < n; i++){
        dp_max[i] = Math.max(nums[i], dp_max[i-1] * nums[i], dp_min[i-1] * nums[i]);
        dp_min[i] = Math.min(nums[i], dp_max[i-1] * nums[i], dp_min[i-1] * nums[i]);
        max_product = Math.max(max_product, dp_max[i]);
    }
    return max_product;
};
// 示例使用
const nums = [2, 3, -2, 4];
console.log(maxProduct(nums)); // 输出: 6

const nums2 = [-2, 0, -1];
console.log(maxProduct(nums2)); // 输出: 0
