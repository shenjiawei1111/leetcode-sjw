var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right)/2);
        if(nums[mid] === target) return mid;
        if(nums[left] <= nums[mid]){
            if(nums[left] <= target && nums[mid] > target){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }else{
            if(nums[right] >= target && nums[mid] < target){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
    }
    return -1;
};
// 示例用法
const nums = [4,5,6,7,0,1,2];
const target = 0;
console.log(search(nums, target)); // 输出: 4

const nums2 = [4,5,6,7,0,1,2];
const target2 = 3;
console.log(search(nums2, target2)); // 输出: -1
