class Solution(object):
    def findAnagrams(self, s, p):
        len_s = len(s)
        len_p = len(p)
        if len_s < len_p:
            return []

        result = []
        # 初始化计数数组
        count_s = [0] * 26
        count_p = [0] * 26

        # 统计 p 中字符的出现次数
        for char in p:
            count_p[ord(char) - ord('a')] += 1

        # 统计 s 中第一个滑动窗口内字符的出现次数
        for i in range(len_p):
            count_s[ord(s[i]) - ord('a')] += 1

        if count_s == count_p:
            result.append(0)

        # 滑动窗口移动
        for i in range(len_p, len_s):
            # 移除左边界的字符
            count_s[ord(s[i - len_p]) - ord('a')] -= 1
            # 添加右边界的字符
            count_s[ord(s[i]) - ord('a')] += 1
            if count_s == count_p:
                result.append(i - len_p + 1)

        return result
# 以下是使用 Solution 类的 findAnagrams 方法的示例
if __name__ == "__main__":
    solution = Solution()
    s = "cbaebabacd"
    p = "abc"
    print(solution.findAnagrams(s, p))  # 输出: [0, 6]
