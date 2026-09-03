class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # 1,2,4,6
        # 1,1,1,1
        # 48,24,6,1
        # 1,1,2,8
        
        prefix = [1]*len(nums)
        suffix = [1]*len(nums)
        for i in range(len(nums)-2, -1, -1):
            prefix[i] = prefix[i+1] * nums[i+1]

        for i in range(1,len(nums)):
            suffix[i] = suffix[i-1] * nums[i-1]

        for i in range(len(nums)):
            prefix[i] *= suffix[i]
        
        return prefix
    