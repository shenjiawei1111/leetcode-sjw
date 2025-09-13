/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    // 栈：存储 [当前已解码字符串, 倍数]
    const stack = [];
    // 当前正在构建的字符串
    let currentStr = "";
    // 当前的倍数（可能是多位数，如 "123" 需累积为 123）
    let currentNum = 0;
    
    // 遍历字符串的每个字符
    for (const char of s) {
        if (!isNaN(char)) {
            // 情况1：字符是数字（处理多位数）
            currentNum = currentNum * 10 + Number(char);
        } else if (char === '[') {
            // 情况2：遇到左括号，将当前状态入栈，重置当前字符串和倍数
            stack.push([currentStr, currentNum]);
            currentStr = "";
            currentNum = 0;
        } else if (char === ']') {
            // 情况3：遇到右括号，出栈并拼接结果
            const [prevStr, num] = stack.pop();
            // 当前字符串重复 num 次，再与之前的字符串拼接
            currentStr = prevStr + currentStr.repeat(num);
        } else {
            // 情况4：字符是字母，直接添加到当前字符串
            currentStr += char;
        }
    }
    
    return currentStr;
};
// 示例：测试 decodeString 函数
const s = "3[a2[c]]";
const result = decodeString(s);
console.log(`输入: ${s}`);
console.log(`输出: ${result}`);
