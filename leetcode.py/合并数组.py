class Solution(object):
    def merge(self, intervals):
        if not intervals:
            return []

        intervals.sort()

        merged = [intervals[0]]
        for current in intervals[1:]:
            last = merged[-1]
            if current[0] <= last[1]:
                merged[-1][1] = max(current[1] ,last[1])
            else:
                merged.append(current)
        return merged
        # 示例用法
if __name__ == "__main__":
    solution = Solution()
    intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
    result = solution.merge(intervals)
    print(f"合并后的区间: {result}")  # 预期输出: [[1, 6], [8, 10], [15, 18]]