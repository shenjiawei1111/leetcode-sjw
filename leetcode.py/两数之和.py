class Solution(object):
    def twoSum(self, nums, target):
        seen = {}
        for i,val in enumerate(nums):
            need = target - val
            if need in seen:
                return [seen[need], i]
            seen[val] = i
        return []

            
nums = [2,7,11,15]
target = 9
s = Solution()
print(s.twoSum(nums, target))
