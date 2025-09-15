var singleNumber = function(nums) {
    let result = 0;
    for(const num of nums){
        result ^= num;
    }
    return result;
};
// 示例使用
const nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums)); // 输出: 4
