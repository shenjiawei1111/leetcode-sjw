/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;
    let prefix_sum ={0:1};
    let current_sum = 0;
    for(let i = 0; i < nums.length ; i++){
        current_sum = current_sum + nums[i];
        if(current_sum - k in prefix_sum){
            count = count + prefix_sum[current_sum - k];
        }
        if(current_sum in prefix_sum){
            prefix_sum[current_sum] += 1;
        }
        else{
            prefix_sum[current_sum] = 1
        }
    }
    return count;
};
// 以下是使用示例
const nums = [1, 1, 1];
const k = 2;
const result = subarraySum(nums, k);
console.log(`数组 [${nums}] 中和为 ${k} 的子数组数量为: ${result}`); // 输出应为 2
