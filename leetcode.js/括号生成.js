var generateParenthesis = function(n) {
    const result = [];
    const backtrack = (current, left, right) => {
        if(current.length === n * 2){
            result.push(current);
            return
        }

        if(left < n){
            backtrack(current + '(', left + 1, right);
        }
        if(right < left){
            backtrack(current + ')', left, right + 1);
        }
    }
    backtrack('', 0, 0);
    return result;
};
// 示例使用
const n = 3;
const combinations = generateParenthesis(n);
console.log(combinations);
