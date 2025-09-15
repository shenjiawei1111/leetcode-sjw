var majorityElement = function(nums) {
    let candidate = nums[0];
    let count = 1;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] === candidate){
            count++;
        }
        else{
            count--;
            if(count === 0){
                candidate = nums[i];
                count = 1;
            }
        }
    }
    return candidate;
};
// 示例使用
const nums = [3, 2, 3];
const result = majorityElement(nums);
console.log(`数组 [${nums}] 中的多数元素是: ${result}`); // 输出: 数组 [3,2,3] 中的多数元素是: 3
