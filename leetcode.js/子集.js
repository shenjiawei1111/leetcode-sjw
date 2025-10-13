var subsets = function(nums) {
    const res = [];
    const state = [];
    function backtrack(start){
        res.push([...state]);

        for(let i = start; i < nums.length; i++){
            state.push(nums[i]);
            backtrack(i + 1);
            state.pop();
        }
    }
    backtrack(0);
    return res;
};
// 以下是使用 subsets 函数的示例
const nums = [1, 2, 3];
const result = subsets(nums);
console.log('数组 [1, 2, 3] 的所有子集为：');
console.log(result);
