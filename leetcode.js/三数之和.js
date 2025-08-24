/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];
    const n = nums.length;
    // 首先对数组进行排序
    nums.sort((a, b) => a - b)
    for (let i = 0; i < n - 2; i++) {
        // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
        if (nums[i] > 0) break;
        // 去重
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = n - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                // 去重
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
};
// 以下是使用 threeSum 函数的示例
const nums = [-1, 0, 1, 2, -1, -4];
const result = threeSum(nums);
console.log(result); // 输出: [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
