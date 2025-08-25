var findAnagrams = function(s, p) {
    const len_s = s.length;
    const len_p = p.length;
    if (len_s < len_p) {
        return [];
    }
    const result = [];
    const count_s = new Array(26).fill(0);
    const count_p = new Array(26).fill(0);
    
    // 初始化p的字符计数
    for (let i = 0; i < len_p; i++) {
        count_p[p.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    
    // 初始化s的第一个窗口计数
    for (let i = 0; i < len_p; i++) {
        count_s[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    
    // 优化数组比较：直接在函数内完成，避免函数调用开销
    const isEqual = () => {
        for (let i = 0; i < 26; i++) {
            if (count_s[i] !== count_p[i]) {
                return false;
            }
        }
        return true;
    };
    
    // 检查初始窗口
    if (isEqual()) {
        result.push(0);
    }
    
    // 滑动窗口移动
    for (let i = len_p; i < len_s; i++) {
        // 移除左边界字符（窗口外的字符）
        const leftChar = s.charCodeAt(i - len_p) - 'a'.charCodeAt(0);
        count_s[leftChar]--;
        
        // 添加右边界字符（新进入窗口的字符）
        const rightChar = s.charCodeAt(i) - 'a'.charCodeAt(0);
        count_s[rightChar]++;
        
        // 检查当前窗口
        if (isEqual()) {
            result.push(i - len_p + 1);
        }
    }
    
    return result;
};
// 实例调用
const s = "cbaebabacd";
const p = "abc";
const anagramIndices = findAnagrams(s, p);
console.log(anagramIndices); // 输出: [0, 6]
