class Solution(object):
    def longestConsecutive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if len(nums) == 0:
            return 0
        nums = sorted(set(nums))
        if nums[-1] - nums[0] == len(nums)-1:
            return len(nums)
        result = 0
        temp = 1
        for i in range(len(nums)-1):
            if nums[i+1]-nums[i] == 1:
                temp += 1
            else:
                result = max(result,temp)
                temp = 1
        result = max(result,temp)
        return result


nums = [100,4,200,1,3,2]
s = Solution()
result = s.longestConsecutive(nums)
print("最长连续序列长度:", result)