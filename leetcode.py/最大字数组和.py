class Solution(object):
    def maxSubArray(self, nums):
        if not nums:  # 处理空数组边界情况
            return 0
            
        current_max = nums[0]  # 当前子数组的最大和
        global_max = nums[0]   # 全局最大和
        
        # 从第二个元素开始遍历（修复错误的关键）
        for i in range(1, len(nums)):
            # 决策：继续当前子数组还是重新开始
            current_max = max(nums[i], current_max + nums[i])
            # 更新全局最大值
            if current_max > global_max:
                global_max = current_max
                
        return global_max
# 以下是使用 Solution 类的示例
if __name__ == "__main__":
    solution = Solution()
    nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    result = solution.maxSubArray(nums)
    print(f"数组 {nums} 的最大子数组和为: {result}")  # 预期输出: 6
