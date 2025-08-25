class Solution(object):
    def lengthOfLongestSubstring(self, s):
        # 使用滑动窗口来解决此问题
        char_index_map = {}  # 用于记录字符及其最新出现的索引
        left = 0  # 滑动窗口的左边界
        max_length = 0  # 记录最长无重复字符子串的长度

        for right in range(len(s)):
            current_char = s[right]
            # 如果当前字符已经在字典中，并且其索引大于等于左边界，移动左边界
            if current_char in char_index_map and char_index_map[current_char] >= left:
                left = char_index_map[current_char] + 1
            # 更新当前字符的索引
            char_index_map[current_char] = right
            # 计算当前窗口的长度，并更新最大长度
            max_length = max(max_length, right - left + 1)

        return max_length

# 以下是使用 Solution 类的示例
if __name__ == "__main__":
    solution = Solution()
    test_str = "abcabcbb"
    result = solution.lengthOfLongestSubstring(test_str)
    print(f"字符串 '{test_str}' 中无重复字符的最长子串长度为: {result}")  # 预期输出: 3
