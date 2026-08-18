class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        store = {}
        for i in range(len(nums)):
            print(store)
            if target - nums[i] in store:
                return [store[target-nums[i]],i]
            else:
                store[nums[i]] = i
        print(store)
        return False

                