var partition = function(s) {
    const n = s.length;
    const result = [];
    const isPalidrome = (left, right) => {
        while(left < right){
            if(s[left] !== s[right]){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    const backtrack = (start, path) => {
        if(start === n){
            result.push([...path]);
            return;
        }
        for(let i = start; i < n; i++){
            if(isPalidrome(start, i)){
                path.push(s.substring(start, i+1));
                backtrack(i+1, path);
                path.pop();
            }
        }
    }
    backtrack(0,[]);
    return result;
};
// 示例使用
const s = "aab";
const partitions = partition(s);
console.log(partitions); // 输出: [ [ 'a', 'a', 'b' ], [ 'aa', 'b' ] ]
