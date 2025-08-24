from collections import defaultdict

class Solution(object):
    def groupAnagrams(self,strs):
        mp = defaultdict(list)
        for st in strs:
            key = ''.join(sorted(st))
            mp[key].append(st)
        return list(mp.values())
        
c = Solution()
strs = ["eat","tea","tan","ate","nat","bat"]
print(c.groupAnagrams(strs))