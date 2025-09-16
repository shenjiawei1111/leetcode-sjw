var findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[nums[0]];
    while(slow !== fast){
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    fast = 0;
    while(fast !== slow){
        slow = nums[slow];
        fast = nums[fast];
    }
    return fast;
};
// 示例使用
const nums = [1, 3, 4, 2, 2];
const result = findDuplicate(nums);
console.log(`数组 [${nums}] 中的重复数字是: ${result}`);
