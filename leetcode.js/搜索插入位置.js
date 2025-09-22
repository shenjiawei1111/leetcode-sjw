var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right){
        const mid = Math.floor((left + right)/2);
        if(nums[mid] === target){
            return mid;
        }
        else if(nums[mid] < target){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }
    return left;

};
// 示例
const nums = [1, 3, 5, 6];
const target1 = 5;
console.log(searchInsert(nums, target1)); // 输出: 2

const target2 = 2;
console.log(searchInsert(nums, target2)); // 输出: 1

const target3 = 7;
console.log(searchInsert(nums, target3)); // 输出: 4

const target4 = 0;
console.log(searchInsert(nums, target4)); // 输出: 0
