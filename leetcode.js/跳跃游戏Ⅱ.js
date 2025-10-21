var jump = function(nums) {
    const n = nums.length;
    if(n === 1) return 0;
    let currentEnd = 0;
    let nextEnd = 0;
    let step = 0;
    for(let i = 0; i < n - 1; i++){
        nextEnd = Math.max(nextEnd, nums[i] + i);
        if(currentEnd === i){
            currentEnd = nextEnd;
            step++;

            if(nextEnd >= n-1){
                break;
            }
        }
    }
    return step;
};
// 示例
const nums = [2, 3, 1, 1, 4];
console.log(jump(nums)); // 输出：2
