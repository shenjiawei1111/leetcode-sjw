var combinationSum = function(candidates, target) {
    const backtrack = (state, target, candidates,start, res) => {
        if(target === 0){
            res.push([...state]);
            return
        }
        for(let i = start; i < candidates.length; i++){
            if(target - candidates[i] < 0) break;
            state.push(candidates[i]);
            backtrack(state, target-candidates[i], candidates, i, res);
            state.pop();
        }
    }
    const res = [];
    candidates.sort((a,b) => a - b);
    backtrack([], target, candidates, 0, res);
    return res;
};
// 示例用法
const candidates = [2, 3, 6, 7];
const target = 7;
const result = combinationSum(candidates, target);
console.log(result); // 输出: [ [ 2, 2, 3 ], [ 7 ] ]
