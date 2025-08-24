class Solution(object):
    def moveZeroes(self, nums):
        a = 0
        for i in nums:
            if i != 0:
                nums[a] = i
                a = a + 1
        while a < len(nums):
            nums[a] = 0
            a = a + 1

nums = [0,1,0,3,12]
s = Solution()
s.moveZeroes(nums)
print(nums)
