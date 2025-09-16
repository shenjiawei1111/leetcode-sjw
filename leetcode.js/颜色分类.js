var sortColors = function(nums) {
    let left = 0;
    let current = 0;
    let right = nums.length-1;
    while(current <= right){
        if(nums[current] === 0){
            [nums[left], nums[current]] = [nums[current], nums[left]];
            left++;
            current++;
        }
        else if(nums[current] === 2){
            [nums[right], nums[current]] = [nums[current], nums[right]];
            right--;
        }
        else{
            current++;
        }
    }
};
// 示例使用
const nums = [2, 0, 2, 1, 1, 0];
console.log("排序前:", nums);
sortColors(nums);
console.log("排序后:", nums);
