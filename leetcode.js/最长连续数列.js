var longestConsecutive = function(nums) {
    // 创建哈希集合存储所有数字
    const numSet = new Set(nums);
    let longestStreak = 0;
    // 遍历集合中的每个数字
    for (const num of numSet) {
        // 检查当前数字是否是序列的起始点
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;
            
            // 查找连续数字
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }
            
            // 更新最长序列长度
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    
    return longestStreak;
};

// 测试代码
const nums = [100, 4, 200, 1, 3, 2];
console.log("最长连续序列长度:", longestConsecutive(nums)); // 应输出 4