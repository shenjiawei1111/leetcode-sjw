var isValid = function(s) {
    const map = {
        '}' : '{',
        ')' : '(',
        ']' : '['
    };
    const stack = [];
    for(let i of s){
        if(i in map){
            if(stack.length == 0 || stack.pop() != map[i]){
                return false;
            }
        }
        else stack.push(i);
    }
    return stack.length === 0;
};
// 示例用法
const testString1 = "()[]{}";
console.log(isValid(testString1)); // 输出: true

const testString2 = "(]";
console.log(isValid(testString2)); // 输出: false

const testString3 = "([)]";
console.log(isValid(testString3)); // 输出: false

const testString4 = "{[]}";
console.log(isValid(testString4)); // 输出: true
