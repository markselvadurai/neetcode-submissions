class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        store = defaultdict(int)
        for i in range(len(nums)):
            need = target - nums[i]
            if need in store.keys():
                return[store[need],i]
            store[nums[i]] = i
        return [0]