var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while(right > left){
        const mid = Math.floor((left + right)/2);
        if(nums[right] < nums[mid]){
            left = mid + 1;
        }else {
            right = mid;
        }
    }
    return nums[left];
};
// 示例用法
const nums1 = [3, 4, 5, 1, 2];
console.log(findMin(nums1)); // 输出: 1

const nums2 = [4, 5, 6, 7, 0, 1, 2];
console.log(findMin(nums2)); // 输出: 0

const nums3 = [11, 13, 15, 17];
console.log(findMin(nums3)); // 输出: 11
