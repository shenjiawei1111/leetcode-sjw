from collections import defaultdict

# 优化版本：使用计数排序代替普通排序，提高效率
# 时间复杂度：O(n * k)，其中n是字符串数量，k是字符串的最大长度
def groupAnagrams(strs):
    mp = defaultdict(list)
    for st in strs:
        # 创建一个长度为26的计数数组，统计每个字符出现的次数
        count = [0] * 26
        for char in st:
            count[ord(char) - ord('a')] += 1
        # 将计数数组转换为元组作为字典的键
        key = tuple(count)
        mp[key].append(st)
    return list(mp.values())

# 测试代码
strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
print(groupAnagrams(strs))
