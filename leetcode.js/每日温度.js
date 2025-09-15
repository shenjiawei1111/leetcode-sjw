var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    const answer = new Array(n).fill(0);
    const stack = [];
    for(let i = 0; i <n; i++){
        while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length-1]]){
            const preIndex = stack.pop();
            answer[preIndex] = i - preIndex;
        }
        stack.push(i);
    }
    return answer;
};
// 示例用法
const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
const result = dailyTemperatures(temperatures);
console.log(result); // 输出: [1, 1, 4, 2, 1, 1, 0, 0]
