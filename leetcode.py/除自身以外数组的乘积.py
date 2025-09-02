class Solution(object):
    def productExceptSelf(self, nums):
        n = len(nums)
        answer = [1] * n
        prefix = 1
        for i in range(n):
            answer[i] = prefix
            prefix *= nums[i]
        
        suffix = 1
        for i in range(n-1,-1,-1):
            answer[i] *= suffix
            suffix*= nums[i]

        return answer
# 以下是代码使用示例
if __name__ == "__main__":
    solution = Solution()
    nums = [1, 2, 3, 4]
    result = solution.productExceptSelf(nums)
    print(f"输入数组: {nums}")
    print(f"除自身以外数组的乘积: {result}")
