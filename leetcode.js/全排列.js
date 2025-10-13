var permute = function(nums) {
    function backtrack(state,choices,selected,res){
        if(state.length === choices.length){
            res.push([...state]);
            return
        }

        choices.forEach((choice,i) => {
            if(!selected[i]){
                selected[i] = true;
                state.push(choice);
                backtrack(state,choices,selected,res);
                selected[i] = false;
                state.pop();
            }
        })
    }

    const res = [];
    const state = [];
    const selected = new Array(nums.length).fill(false);
    backtrack(state,nums,selected,res);
    return res;

};
// 示例使用
const nums = [1, 2, 3];
const result = permute(nums);
console.log(result);
