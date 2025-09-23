var searchRange = function(nums,target) {
    function findLeftBound(){
        let left = 0;
        let right = nums.length - 1;
        let bound = -1;
        while(left <= right){
            let mid = Math.floor((left + right)/2);
            if(nums[mid] === target){
                bound = mid;
                right = mid - 1;
            }
            else if(nums[mid] > target){
                right = mid - 1;
            }
            else{
                left = mid + 1;
            }
        }
        return bound;
    }

    function findRightBound(){
        let left = 0;
        let right = nums.length - 1;
        let bound = -1;
        while(left <= right){
            let mid = Math.floor((left + right)/2);
            if(nums[mid] === target){
                bound = mid;
                left = mid + 1;
            }
            else if(nums[mid] > target){
                right = mid - 1;
            }
            else{
                left = mid + 1;
            }
        }
        return bound;
    }

    const left = findLeftBound();
    if(left === -1) return [-1,-1];
    const right = findRightBound();
    return[left,right];
};
// 示例用法
const nums = [5,7,7,8,8,10];
const target = 8;
console.log(searchRange(nums, target)); // 输出: [3, 4]

const nums2 = [5,7,7,8,8,10];
const target2 = 6;
console.log(searchRange(nums2, target2)); // 输出: [-1, -1]

const nums3 = [];
const target3 = 0;
console.log(searchRange(nums3, target3)); // 输出: [-1, -1]
