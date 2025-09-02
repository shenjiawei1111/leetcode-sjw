class Solution(object):
    def rotate(self, nums, k):
        a = []
        n = len(nums)
        if n == 0:
            return nums
        k = k % n
        nums[:] = nums[n-k:] + nums[:n-k]
        return nums
# 以下是使用 Solution 类的 rotate 方法的示例
if __name__ == "__main__":
    solution = Solution()
    nums = [-1,-100,3,99]
    k = 2
    result = solution.rotate(nums, k)
    print(f"原始数组: {nums}")
    print(f"轮转 {k} 次后的数组: {result}")
