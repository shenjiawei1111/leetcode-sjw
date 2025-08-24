class Solution(object):
    def threeSum(self, nums): 

        nums.sort()
        result = []
        length = len(nums)
        for i in range(length - 2):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            left, right = i + 1, length - 1
            while left < right:
                total = nums[i] + nums[left] + nums[right]
                if total < 0:
                    left += 1
                elif total > 0:
                    right -= 1
                else:
                    result.append([nums[i], nums[left], nums[right]])
                    while left < right and nums[left] == nums[left + 1]:
                        left += 1
                    while left < right and nums[right] == nums[right - 1]:
                        right -= 1
                    left += 1
                    right -= 1
        return result
# 以下是使用 Solution 类的 threeSum 方法的示例
if __name__ == "__main__":
    solution = Solution()
    nums = [-1, 0, 1, 2, -1, -4]
    print("输入的数组为:", nums)
    print("三数之和为 0 的所有不重复三元组为:", solution.threeSum(nums))
