class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        nums = set(nums)
        res = 0
        for num in nums:
            tmp = 0
            if num-1 not in nums:
                tmp = 1
                print('start: ',num)
                while num+tmp in nums:
                    print('going: ',num,'and: ',num+tmp)
                    tmp += 1
                if tmp > len(nums)/2:
                    return tmp
                res = max(tmp,res)
        return(res)

