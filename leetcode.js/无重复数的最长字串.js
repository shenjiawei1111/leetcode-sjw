var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let max_length = 0;
    const char_index_map = {}

    for(let right = 0 ; right < s.length ; right++){
        const current_char = s[right];
        if(char_index_map.hasOwnProperty(current_char) && (char_index_map[current_char] >= left)){
            left = char_index_map[current_char] + 1;
        }
        char_index_map[current_char] = right;
        max_length = Math.max(max_length , right - left + 1);
    }
    return max_length;
};
// 示例用法
const exampleStr = "abcabcbb";
const result = lengthOfLongestSubstring(exampleStr);
console.log(`字符串 "${exampleStr}" 中无重复字符的最长子串长度为: ${result}`); // 输出应为 3
