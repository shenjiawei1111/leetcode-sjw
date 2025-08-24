var moveZeroes = function(nums) {
    let a = 0;
    for(const i of nums){
        if(i !== 0){
            nums[a] = i;
            a++;
        }
    }
    while(a < nums.length){
        nums[a] = 0;
        a++;
    }

};
// 示例用法
const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // 输出: [1, 3, 12, 0, 0]
