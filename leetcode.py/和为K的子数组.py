class Solution(object):
    def subarraySum(self, nums, k):  
        count = 0
        prefix_sum = {0: 1}  # 初始化前缀和字典，前缀和为0的情况出现1次
        current_sum = 0
        for num in nums:
            current_sum += num
            if current_sum - k in prefix_sum:
                count += prefix_sum[current_sum - k]
            if current_sum in prefix_sum:
                prefix_sum[current_sum] += 1
            else:
                prefix_sum[current_sum] = 1
        return count
# 以下是使用 Solution 类的实例代码
if __name__ == "__main__":
    solution = Solution()
    nums = [1, 1, 1]
    k = 2
    result = solution.subarraySum(nums, k)
    print(f"子数组和为 {k} 的数量是: {result}")  # 预期输出: 子数组和为 2 的数量是: 2
