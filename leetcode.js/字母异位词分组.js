//帮我写一段字母异位词分组的代码

var groupAnagrams = function(strs) {
    const map = new Map();
    for (const str of strs) {
        const sorted = str.split('').sort().join('');
        if (map.has(sorted)) {
            map.get(sorted).push(str);
        } else {
            map.set(sorted, [str]);
        }
    }
    return Array.from(map.values());
};

// 简单测试示例
const testCase = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(testCase);
console.log("字母异位词分组结果:", result);




